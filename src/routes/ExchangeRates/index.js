import React from 'react'
import styles from './ExchangeRates.module.css'
import CurrencyData from '../../components/CalculateCurrency'


const CurrentExchangeRates = () => {

  const {
    currencyData,
    currencyOptions,
    fromCurrency,
    toCurrency,
    exchangeRate,
    setFromCurrency,
    setToCurrency
  } = CurrencyData();


  return (
    <div className={styles.exchangeRates}>
      <div className={styles.boxConatiner}>

      </div>
    </div>
  )
}

export default CurrentExchangeRates