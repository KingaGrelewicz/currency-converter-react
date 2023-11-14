import { useState } from 'react';
import StyledContainer from "./Container";
import { Form } from "./Form";
import { GlobalStyled } from "./styled";
import { useRatesData } from './Form/useRatesData';

function App() {
  const [result, setResult] = useState();
  const { rates, loading, error } = useRatesData();
 
  const calculateResult = (currency, amount) => {
       const rate = rates.data[currency];
    
    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
      <StyledContainer>
        <GlobalStyled />
        <Form
          result={result}
          calculateResult={calculateResult}
        />
      </StyledContainer>
  );
}

export default App; 
