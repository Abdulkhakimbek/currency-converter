import React from 'react'
import styles from './CurrencyRow.module.css'

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
    inputLabel,
    selectLabel
  } = props
  return (
    <div className={styles.container}>
      <div className={styles.inputHolder}>
        <label className={styles.label}>{inputLabel}</label>
        <input name='CurrencyAmount' type="number" className={styles.input} value={amount ? amount : ""} onChange={onChangeAmount} />
      </div>
      <div className={styles.inputHolder}>
        <label className={styles.label}>{selectLabel}</label>
        <select value={selectedCurrency} onChange={onChangeCurrency} className={styles.select}>
          {currencyOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
