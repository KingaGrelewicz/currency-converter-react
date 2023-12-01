import { useState } from 'react';
import StyledContainer from "./Container";
import { Form } from "./Form";
import { GlobalStyled } from "./styled";
import { useRatesData } from "./Form/useRatesData";

function App() {
  const [result, setResult] = useState("");
  const { ratesData } = useRatesData("");

  const calculateResult = (amount, currency) => {
    console.log("ratesData:", ratesData);

    if (ratesData && ratesData.currencies && ratesData.rate) {
      const currencyIndex = ratesData.currencies.findIndex(code => code === currency);

      if (currencyIndex !== -1) {
        const currencyValue = ratesData.rate[currencyIndex];

        try {
          setResult({
            sourceAmount: +amount,
            targetAmount: amount / currencyValue,
            currency,
          });
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
        ratesData={ratesData}
      />
    </StyledContainer>
  );
}

export default App; 
