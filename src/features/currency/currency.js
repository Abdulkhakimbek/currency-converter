import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrency } from "./currencySlice"
import CurrencyData from '../../components/CalculateCurrency';
import styles from './Currency.module.css'

export function Currency() {
  const { currencyOptions } = CurrencyData();
  const chosenCurrency = useSelector((state) => state.currency.value)
  const dispatch = useDispatch()

  return (
    <select value={chosenCurrency} onChange={(e) => dispatch(setCurrency(e.target.value))} className={styles.select}>
      {currencyOptions.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  )
}