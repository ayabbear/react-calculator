import React, { useState } from 'react'
export const NumberContext = React.createContext()

const NumberProvider = (props) => {
  const [number, setNumber] = useState('')
  const [storedNumber, setStoredNumber] = useState('')
  const [functionType, setFunctionType] = useState('')

  const handleSetDisplayValue = (num) => {
    if ((!number.includes('.') || num !== '.') && number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, '')}`)
    }
  }

  const handleSetStoredValue = () => {
    setStoredNumber(number)
    setNumber('')
  }

  const handleClearValue = () => {
    setNumber('')
    setStoredNumber('')
    setFunctionType('')
  }

  const handleSetCalcFunction = (type) => {
    if (number) {
      setFunctionType(type)
      handleSetStoredValue()
    }
    if (storedNumber) {
      setFunctionType(type)
    }
  }

  const handleToggleNegative = () => {
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`)
      } else {
        const positiveNumber = number.slice(1)
        setStoredNumber(positiveNumber)
      }
    } else if (storedNumber > 0) {
      setNumber(`-${storedNumber}`)
    } else {
      const positiveNumber = storedNumber.slice(1)
      setStoredNumber(positiveNumber)
    }
  }

  const handlePercentage = () => {
    if (number) {
      setNumber(`${(number / 100) * 100}`)
      setStoredNumber(number)
    }
  }

  const doMath = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case '+':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`)
          break
        case '-':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`)
          break
        case '/':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`)
          break
        case '*':
          setStoredNumber(`${Math.round(`${parseFloat(storedNumber) * parseFloat(number) * 1000}`) / 1000}`)
          break
        default:
          break
      }
      setNumber('')
    }
  }

  return (
    <NumberContext.Provider
      value={{
        handleSetDisplayValue,
        handleSetStoredValue,
        handleClearValue,
        handleSetCalcFunction,
        handleToggleNegative,
        handlePercentage,
        doMath,
        functionType,
        number,
        storedNumber,
        setNumber
      }}
    >
      {props.children}
    </NumberContext.Provider>
  )
}

export default NumberProvider
