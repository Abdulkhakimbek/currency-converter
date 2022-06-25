import React from 'react'
import CurrencyData from '../../components/CalculateCurrency'
import styles from './ExchangeRates.module.css'

const CurrentExchangeRates = () => {
  const {
    currencyData,
  } = CurrencyData();

  let arrCurrencyData = []

  for (const [k, v] of Object.entries(currencyData)) {
    arrCurrencyData.push(<div>{`${k} : ${v}`}</div>)
  }

  return (
    <>
      <div className={styles.exchangeRates}>
        <div className={styles.boxContainer}>
          <div className={styles.top}><h1>Convert</h1></div>
          <div className={styles.notes}>
            <span>Base Currence is</span>
            <span>Exchange Rates</span>
          </div>
          <div className={styles.content}>
            <div>{arrCurrencyData}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CurrentExchangeRates