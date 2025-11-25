import React from 'react'

const CurrencyCard = ({ amount, fromCurrency, convertedAmount, toCurrency }) => {
  return (
    <div className="currency-card">
      <div className="conversion-result">
        <span className="amount">{amount} {fromCurrency}</span>
        <span className="equals">=</span>
        <span className="converted-amount">
          {convertedAmount.toFixed(2)} {toCurrency}
        </span>
      </div>
      <div className="conversion-rate">
        Курс: 1 {fromCurrency} = {(convertedAmount / amount).toFixed(4)} {toCurrency}
      </div>
    </div>
  )
}

export default CurrencyCard