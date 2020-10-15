import React from 'react'
import NumberProvider from '../../utils/numberProvider'
import Buttons from '../buttons'
import Screen from '../screen'
import styles from './calculator.module.scss'

const items = [
  {
    id: 0,
    caption: 'C',
    type: 'white',
    value: 0
  },
  {
    id: 1,
    caption: '+/-',
    type: 'white',
    value: 0
  },
  {
    id: 2,
    caption: '%',
    type: 'white',
    value: '%'
  },
  {
    id: 3,
    caption: '/',
    type: 'orange',
    value: '/'
  },
  {
    id: 4,
    caption: '7',
    type: 'white',
    value: 7
  },
  {
    id: 5,
    caption: '8',
    type: 'white',
    value: 8
  },
  {
    id: 6,
    caption: '9',
    type: 'white',
    value: 9
  },
  {
    id: 7,
    caption: 'X',
    type: 'orange',
    value: '*'
  },
  {
    id: 8,
    caption: '4',
    type: 'white',
    value: 4
  },
  {
    id: 9,
    caption: '5',
    type: 'white',
    value: 5
  },
  {
    id: 10,
    caption: '6',
    type: 'white',
    value: 6
  },
  {
    id: 11,
    caption: '-',
    type: 'orange',
    value: '-'
  },
  {
    id: 12,
    caption: '1',
    type: 'white',
    value: 1
  },
  {
    id: 13,
    caption: '2',
    type: 'white',
    value: 2
  },
  {
    id: 14,
    caption: '3',
    type: 'white',
    value: 3
  },
  {
    id: 15,
    caption: '+',
    type: 'orange',
    value: '+'
  },
  {
    id: 16,
    caption: '0',
    type: 'long',
    value: 0
  },
  {
    id: 17,
    caption: '.',
    type: 'white',
    value: '.'
  },
  {
    id: 18,
    caption: '=',
    type: 'orange',
    value: '='
  }
]

const Calculator = () => {
  return (
    <NumberProvider>
      <div className={styles.calculator__container}>
        <Screen />
        <div className={styles.grid__container}>
          {items.map((value, index) => {
            return <Buttons key={index} type={value.type} caption={value.caption} value={value.value} />
          })}
        </div>
      </div>
    </NumberProvider>
  )
}

export default Calculator
