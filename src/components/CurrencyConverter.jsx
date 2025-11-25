import React, { useState } from 'react'
import CurrencyCard from './CurrencyCard'

const CurrencyConverter = () => {
  const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.5,
    RUB: 75.0
  }

  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('EUR')

  const convertCurrency = (value, from, to) => {
    const valueInUSD = value / exchangeRates[from]
    return valueInUSD * exchangeRates[to]
  }

  const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency)

  const handleAmountChange = (e) => {
    setAmount(e.target.value)
  }

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value)
  }

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value)
  }

  const swapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <div className="converter">
      <div className="converter-controls">
        <div className="input-group">
          <label>Сумма:</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            min="0"
            step="0.01"
          />
        </div>

        <div className="currency-selectors">
          <div className="input-group">
            <label>Из:</label>
            <select value={fromCurrency} onChange={handleFromCurrencyChange}>
              {Object.keys(exchangeRates).map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>

          <button className="swap-btn" onClick={swapCurrencies} title="Поменять валюты местами">
            ⇄
          </button>

          <div className="input-group">
            <label>В:</label>
            <select value={toCurrency} onChange={handleToCurrencyChange}>
              {Object.keys(exchangeRates).map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <CurrencyCard
        amount={amount}
        fromCurrency={fromCurrency}
        convertedAmount={convertedAmount}
        toCurrency={toCurrency}
      />

      <div className="exchange-rates">
        <h3>Текущие курсы (фиктивные):</h3>
        <ul>
          {Object.entries(exchangeRates).map(([currency, rate]) => (
            <li key={currency}>1 USD = {rate} {currency}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CurrencyConverter