import React, { useContext } from 'react'
import styles from './buttons.module.scss'
import { NumberContext } from '../../utils/numberProvider'

const Buttons = ({ type, caption, value }) => {
  const { handleClearValue } = useContext(NumberContext)
  const { handleSetDisplayValue } = useContext(NumberContext)
  const { handleSetCalcFunction } = useContext(NumberContext)
  const { handleToggleNegative } = useContext(NumberContext)
  const { handlePercentage } = useContext(NumberContext)
  const { doMath } = useContext(NumberContext)

  const handleClick = (value) => {
    if (caption === 'C') {
      handleClearValue()
    } else if (
      caption === '0' ||
      caption === '1' ||
      caption === '2' ||
      caption === '3' ||
      caption === '4' ||
      caption === '5' ||
      caption === '6' ||
      caption === '7' ||
      caption === '8' ||
      caption === '9'
    ) {
      handleSetDisplayValue(value)
    } else if (caption === '.') {
      handleSetDisplayValue(value)
    } else if (caption === '+' || caption === '-' || caption === 'X' || caption === '/') {
      handleSetCalcFunction(value)
    } else if (caption === '+/-') {
      handleToggleNegative()
    } else if (caption === '%') {
      handlePercentage()
    } else if (caption === '=') {
      doMath()
    }
  }

  const buttonType =
    type === 'white' ? styles.key__white : type === 'orange' ? styles.key__orange : type === 'long' && styles.key__long

  return (
    <button className={buttonType} id={value} name={value} onClick={() => handleClick(value)}>
      {caption}
    </button>
  )
}

export default Buttons
