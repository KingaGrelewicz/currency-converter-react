import { useState } from 'react';
import StyledContainer from "./Container";
import { currencies } from "./Form/currencies";
import { Form } from "./Form";
import { GlobalStyled } from "./styled";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

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
