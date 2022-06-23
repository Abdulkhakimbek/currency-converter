import React, { useState, useEffect } from 'react'
import CurrencyRow from '../../components/CurrencyRow'

import styles from './home.module.css'

const BASE_URL = 'https://openexchangerates.org/api/latest.json?app_id=2b785e400f834c9da5b01159fa7f06bc';

const Home = () => {
  const [currencyData, setCurrencyData] = useState()
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        console.log(" fetched data: ", data)
        setCurrencyData(data.rates)
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
  }, [])

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      setExchangeRate(currencyData[toCurrency] / currencyData[fromCurrency])
    }
  }, [fromCurrency, toCurrency])

  console.log("fromCurrency", fromCurrency)
  console.log("toCurrency", toCurrency)
  console.log("exchangeRate", exchangeRate)
  console.log("currencyData", currencyData)

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }


  return (
    <>
      <div className={styles.home}>
        <div className={styles.boxContainer}>
          <div className={styles.top}><h1>Convert</h1></div>
          <div className={styles.content}>
            <div>
              <CurrencyRow
                currencyOptions={currencyOptions}
                selectedCurrency={fromCurrency}
                onChangeCurrency={e => setFromCurrency(e.target.value)}
                onChangeAmount={handleFromAmountChange}
                amount={fromAmount}
              />
            </div>
            <div className={styles.equals}>=</div>
            <CurrencyRow
              currencyOptions={currencyOptions}
              selectedCurrency={toCurrency}
              onChangeCurrency={e => setToCurrency(e.target.value)}
              onChangeAmount={handleToAmountChange}
              amount={toAmount}
            />
          </div>
        </div>
      </div>


    </>
  )
}

export default Home