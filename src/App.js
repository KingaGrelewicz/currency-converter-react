import { useState } from 'react';
import StyledContainer from "./Container";
import { Form } from "./Form";
import { GlobalStyled } from "./styled";
import { useRatesData } from './Form/useRatesData';

function App() {
  const [result, setResult] = useState("");
  const { ratesData, status  } = useRatesData("");
   
  const calculateResult = (currency, amount) => {
    if (status === "loading") {
      console.log("Dane o kursach są jeszcze ładowane. Poczekaj chwilę.");
      return;
    }
    if (ratesData && ratesData.status === "success" && ratesData.data) {
      const currencyData = ratesData.data.find(rate => rate.code === currency);
  
      if (currencyData) {
        setResult({
          sourceAmount: +amount,
          targetAmount: amount / currencyData.value,
          currency,
        });
      };
    } else {
      console.error(`Nie można znaleźć kursu dla waluty ${currency}`);
    }
  }

  return (
    <StyledContainer>
      <GlobalStyled />
      <Form
        result={result}
        calculateResult={calculateResult}
        ratesData={ratesData}
      />
    </StyledContainer>
  );
}

export default App; 
