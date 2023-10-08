  import { useState } from 'react';
  import Container from "./Container";
  import { currencies } from "./Form/currencies";
  import { Form } from "./Form";

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
      <Container>
        <Form
          result={result}
          calculateResult={calculateResult}
        />
      </Container>
    );
  }

  export default App; 
