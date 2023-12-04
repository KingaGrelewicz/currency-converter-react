import { useState } from 'react';
import StyledContainer from "./Container";
import { Form } from "./Form";
import { GlobalStyled } from "./styled";
import { useRatesData } from "./Form/useRatesData";

function App() {
  const [result, setResult] = useState();
  const [isResultVisible, setIsResultVisible] = useState(false);
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const currencies = ratesData.currencies[currency];

    try {
      const currencyData = currencies && currencies.value;

      setResult({
        sourceAmount: +amount,
        targetAmount: amount * currencyData,
        currency,
      });

      setIsResultVisible(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <StyledContainer>
      <GlobalStyled />
      <Form
        result={result}
        calculateResult={calculateResult}
        ratesData={ratesData}
        isResultVisible={isResultVisible}
      />
    </StyledContainer>
  );
}

export default App; 
