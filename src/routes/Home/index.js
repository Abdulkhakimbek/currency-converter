import React, { useState } from 'react'
import Converter from '../../components/Converter';
import TextBox from '../../components/TextBox';
import CurrencyData from '../../components/CalculateCurrency';
import styles from './home.module.css'

const Home = () => {
  const [chosenCurrency, setChosenCurrency] = useState("EUR")
  const { currencyOptions } = CurrencyData();
  console.log(currencyOptions)
  return (
    <>
      <div className={styles.home}>
        <div className={styles.boxContainer}>
          <div className={styles.top}><h1>Convert</h1></div>
          <Converter />
          <div className={styles.top}><h1>Text Box</h1></div>
          <TextBox />
          <div className={styles.top}><h1>Set The Base Currency for the next page</h1></div>
          <select value={chosenCurrency} onChange={(e) => setChosenCurrency(e.target.value)} className={styles.select}>
            {currencyOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default Home