import React, { useState, useEffect } from 'react'
import CurrencyData from '../CalculateCurrency'
import styles from "./TextBox.module.css"

const TextBox = () => {
  const {
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

    if (inputArrData.length == 4) {
      setAmount(inputArrData[0])
      setFromCurrency(inputArrData[1])
      setToCurrency(inputArrData[3])
      setToAmount(amount * exchangeRate)
      console.log(amount)
      console.log(inputArrData[0])
      console.log(exchangeRate)
      console.log(toAmount)
    } else {
      setError("Incorrect input format")
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.inputHolder}>
        <label className={styles.label}>Format: 15 USD in UAH</label>
        <input type="text" className={styles.input} onChange={(e) => setInputData(e.target.value)} />
      </div>
      <button className={styles.convertBtn} onClick={() => handleButtonClick()}>
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