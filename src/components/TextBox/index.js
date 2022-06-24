import React, { useState, useEffect } from 'react'
import CurrencyData from '../CalculateCurrency'
import styles from "./TextBox.module.css"

const TextBox = () => {
  const {
    currencyData,
    currencyOptions,
    fromCurrency,
    toCurrency,
    exchangeRate,
    setFromCurrency,
    setToCurrency
  } = CurrencyData();
  const [inputdata, setInputData] = useState()
  const [amount, setAmount] = useState()
  const [toAmount, setToAmount] = useState(0)
  const [error, setError] = useState("ERROR")

  const handleButtonClick = () => {
    console.log(inputdata)
    let inputArrData = inputdata.split(" ")

    if (inputArrData.length === 4) {
      console.log("ready")
      console.log(inputArrData[0])
      setAmount(inputArrData[0])
      console.log("ready Amount:", amount)
      setFromCurrency(inputArrData[1])
      setToCurrency(inputArrData[3])
      console.log("Ready Exchange rate:", exchangeRate)
      setToAmount(amount * exchangeRate)
      console.log("Ready toAmount:", toAmount)
    } else {
      setError("Incorrect input format")
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputHolder}>
        <label className={styles.label}></label>
        <input type="text" className={styles.input} onChange={(e) => setInputData(e.target.value)} />
      </div>

      <button onClick={() => handleButtonClick()}>
        Convert
      </button>

      <div className={styles.result}>
        <label className={styles.label}>Result</label>
        <div className={styles.input}>{isNaN(toAmount) ? error : toAmount}</div>
      </div>
    </div>
  )
}

export default TextBox