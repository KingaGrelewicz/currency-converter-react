import { useState } from 'react';
import Container from "./Container";
import Title from "./Title";
import RequiredText from "./RequiredText";
import { Form, selectedCurrency } from "./Form";
import Result from "./Result";

function App() {
  const [currencies, setCurrency] = useState([
    { id: 1, name: "Euro", value: 4.6 },
    { id: 2, name: "Dolar amerykański", value: 4.32 },
    { id: 3, name: "Funt brytyjski", value: 5.30 },
  ]);
  const [result, setResult] = useState("");

  const calculateResult = () => {
    setResult(currencies = currencies.find(currency => currency.id === selectedCurrency))

    if (selectedCurrency)
      return amount.value / selectedCurrency.value;

  };

  return (
    <Container>
      <fieldset className="form__fieldset">
        <Title />
        <RequiredText />
        <Form currencies={currencies} />
        <Result
          currencies={currencies}
          calculateResult={calculateResult}
          result={result}
        />
      </fieldset>
    </Container>
  );
}

export default App;
