import React, { useEffect, useState } from 'react'


const BaseCurrency = (chosenCurrency) => {

  const [customData, setCustomData] = useState({})

  const URL = process.env.REACT_APP_API_KEY + `&base=${chosenCurrency}`;

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setCustomData(data.rates)
      })
  }, [chosenCurrency])

  return customData;
}

export default BaseCurrency