import { useState } from 'react';
import Container from "./Container";
import Title from "./Title";
import RequiredText from "./RequiredText";
import Form from "./Form";
import Result from "./Result";

function App() {
  const [currencies, setCurrencies] = useState([
    { id: 1, name: "Euro", value: 4.6, shortcut: "EUR" },
    { id: 2, name: "Dolar amerykański", value: 4.32, shortcut: "USD" },
    { id: 3, name: "Funt brytyjski", value: 5.30, shortcut: "GBP" },
  ]);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  const calculateResult = () => {
    const calculateCurrency = currencies.find(currency => currency.id === Number(selectedCurrency));

    if (calculateCurrency) {
      const calculatedResult = amount / calculateCurrency.value;
      setResult(calculatedResult.toFixed(2));
    }
  };

  return (
    <Container>
      <fieldset className="form__fieldset">
        <Title />
        <RequiredText />
        <Form
          currencies={currencies}
          selectedCurrency={selectedCurrency}
          amount={amount}
          setSelectedCurrency={setSelectedCurrency}
          setAmount={setAmount}
        />
        <button onClick={calculateResult} className="form__button">Przelicz</button>
        <Result
          result={result}
        />
      </fieldset>
    </Container>
  );
}

export default App;
