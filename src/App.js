import { useState } from 'react';
import Container from "./Container";
import Title from "./Title";
import RequiredText from "./RequiredText";
import Form from "./Form";
import Result from "./Result";
import Button from "./Button";

function App() {
  const [currencies, setCurrencies] = useState([
    { id: 1, name: "Euro", value: 4.6, output: "EUR" },
    { id: 2, name: "Dolar amerykański", value: 4.32, output: "USD" },
    { id: 3, name: "Funt brytyjski", value: 5.30, output: "GBP" },
  ]);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const calculateResult = () => {
    const calculateCurrency = currencies.find((currency) => currency.id === Number(selectedCurrency));

    if (calculateCurrency) {
      const calculatedResult = (amount / calculateCurrency.value).toFixed(2);
      setResult(`${amount} PLN = ${calculatedResult} ${calculateCurrency.output}`);
    } else {
      setResult(null);
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
        <Button 
          calculateResult={calculateResult}
        />
        <Result
          result={result}
          amount={amount}
          selectedCurrency={selectedCurrency}
        />
      </fieldset>
    </Container>
  );
}

export default App;
