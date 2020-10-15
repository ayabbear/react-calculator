import React, { useContext } from 'react'
import styles from './screen.module.scss'
import { NumberContext } from '../../utils/numberProvider'

const Screen = () => {
  const { number, storedNumber, functionType } = useContext(NumberContext)

  return (
    <div className={styles.screen__container}>
      <p className={styles.screen__container__upper}>
        {!storedNumber ? '0' : `${storedNumber} ${functionType} ${number}`}
      </p>
      <p className={styles.screen__container__lower}>
        {!number.length && !storedNumber ? '0' : number || storedNumber}
      </p>
    </div>
  )
}

export default Screen
