import { useEffect, useState } from 'react'

const BASE_URL = process.env.REACT_APP_API_KEY;

const CurrencyData = () => {
  const [currencyData, setCurrencyData] = useState()
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()

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

  const values = {
    currencyData,
    currencyOptions,
    fromCurrency,
    toCurrency,
    exchangeRate,
    setFromCurrency,
    setToCurrency
  }

  return values;
}

export default CurrencyData