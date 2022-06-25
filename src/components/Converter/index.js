import React, { useState } from 'react'
import CurrencyRow from '../CurrencyRow';
import CurrencyData from '../../components/CalculateCurrency';
import styles from './Converter.module.css'

const Converter = () => {
  const {
    currencyData,
    currencyOptions,
    fromCurrency,
    toCurrency,
    exchangeRate,
    fromAmount,
    toAmount,
    setFromCurrency,
    setToCurrency,
    handleFromAmountChange,
    handleToAmountChange
  } = CurrencyData();



  return (
    <>
      <div className={styles.content}>
        <CurrencyRow
          inputLabel={"Amount"}
          selectLabel={"From"}
          name='CurrencyAmount'
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={e => setFromCurrency(e.target.value)}
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
        />
        <div className={styles.equals}>=</div>
        <CurrencyRow
          inputLabel={"Converted Amount"}
          selectLabel={"To"}
          name='CurrencyAmount'
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={e => setToCurrency(e.target.value)}
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
        />
      </div>
    </>
  )
}

export default Converter