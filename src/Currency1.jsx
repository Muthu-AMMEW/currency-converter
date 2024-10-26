import { useEffect, useState } from "react"
import axios from 'axios';


export default function Currency1() {
  const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [exchangeRate, setExchangeRate] = useState(null);

  return (
    <>
      <div className="row min-vw-100 min-vh-100 justify-content-center align-items-center bg-info-subtle bg-image">
        <div className="col-11 col-sm-8 col-md-7 col-lg-6 col-xl-5">

          <div className="bg-white d-flex flex-column justify-content-center align-items-center w-100 rounded-5">
            <div className='text-center text-success h2 mt-2'>Currency Converter</div>
            <div className="input-container">
              <label htmlFor="amt">Amount:</label>
              <input type="number" name="" id="amt" value={amount} onChange={handleAmountChange} />
            </div>
            <div className="">
              <label htmlFor="fromCurrency">From Currency:</label>
              <select id="fromCurrency" value={fromCurrency} onChange={handleFromCurrencyChange}>
                <option value="USD">USD - united States Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound Sterling</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="INR">INR - Indian Ruppe</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="ZAR">ZAR - South African Rand</option>
              </select>
            </div>
            <div className="">
              <label htmlFor="toCurrency">To Currency:</label>
              <select id="toCurrency" value={toCurrency} onChange={handleToCurrencyChange}>
                <option value="USD">USD - united States Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound Sterling</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="INR">INR - Indian Ruppe</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="ZAR">ZAR - South African Rand</option>
              </select>
            </div>
            <div className="">
              <p>{amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}