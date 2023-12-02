import { useState } from 'react';
import StyledContainer from "./Container";
import { Form } from "./Form";
import { GlobalStyled } from "./styled";
import { useRatesData } from "./Form/useRatesData";

function App() {
  const [result, setResult] = useState("");
  const { status, currencies, rate, date } = useRatesData("");

  const calculateResult = (currency, amount) => {
    console.log("ratesData1:", status, currencies, rate, date);

    if (currencies && rate) {
      const currencyIndex = currencies.findIndex(code => code === currency);

      if (currencyIndex !== -1) {
        const currencyValue = rate[currencyIndex];

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
        ratesData={{ status, currencies, rate, date }}
      />
    </StyledContainer>
  );
}

export default App; 
