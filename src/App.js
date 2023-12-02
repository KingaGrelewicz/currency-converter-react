import { useState } from 'react';
import StyledContainer from "./Container";
import { Form } from "./Form";
import { GlobalStyled } from "./styled";
import { useRatesData } from "./Form/useRatesData";

function App() {
  const [result, setResult] = useState({
    sourceAmount: 0,
    targetAmount: 0,
    currency: "",
  });
  const { status, currencies, rate, date } = useRatesData("");

  const calculateResult = (currency, amount) => {
    if (currencies && rate) {
      const currencyIndex = currencies.findIndex(code => code === currency);

      if (currencyIndex !== -1) {
        const currencyValue = rate[currencyIndex];
        

        try {
          setResult(prevResult => ({
            ...prevResult,
            sourceAmount: +amount,
            targetAmount: +amount / (currencyValue || 1),
            currency,
          }));

        } catch (error) {
          console.error(error);
        }
      }
    }
  }

  return (
    <StyledContainer>
      <GlobalStyled />
      <Form
        result={result}
        calculateResult={calculateResult}
        ratesData={{ status, currencies, rate, date }}
      />
    </StyledContainer>
  );
}

export default App; 
