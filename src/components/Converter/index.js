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
    setFromCurrency,
    setToCurrency
  } = CurrencyData();

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
      <div className={styles.content}>
        <div>
          <CurrencyRow
            inputLabel={"Amount"}
            selectLabel={"From"}
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={e => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
          />
        </div>
        <div className={styles.equals}>=</div>
        <CurrencyRow
          inputLabel={"Converted Amount"}
          selectLabel={"To"}
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