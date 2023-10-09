import { useEffect, useState } from 'react';
import Container from "./Container";
import { currencies } from "./Form/currencies";
import { Form } from "./Form";

function App() {
  const [date, setDate] = useState(new Date());
  const currentDate = date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date(date.getTime() + 1000));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [date]);

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
        currentDate={currentDate}
        result={result}
        calculateResult={calculateResult}
      />
    </Container>
  );
}

export default App; 
