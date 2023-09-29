import "./style.css";
import { useState } from 'react';

const Result = ({ currencies, amount, selectedCurrency }) => {
   const [result, setResult] = useState("");

   const calculateResult = () => {
      const selectedCurrency = currencies.find((currency) => currency.id === selectedCurrency);

      if (selectedCurrency) {
         const calculatedResult = amount.value / selectedCurrency.value;
         setResult(calculatedResult);
      }
   };

   return (
      <>
         <button onClick={calculateResult} className="form__button">Przelicz</button>
         <span
            className="result"
         >
            {result}
         </span>
      </>
   )
}

export default Result;