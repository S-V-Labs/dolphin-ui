import React from 'react'
import { TypeAhead } from './components/Typeahead'
import styles from './styles.module.css'

const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { TypeAhead }
