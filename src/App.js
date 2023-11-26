import { useEffect, useState } from 'react';
import StyledContainer from "./Container";
import { Form } from "./Form";
import { GlobalStyled } from "./styled";
import { useRatesData } from "./Form/useRatesData";

function App() {
  const [result, setResult] = useState("");
  const { ratesData } = useRatesData("");
  
  const calculateResult = (currency, amount) => {
    console.log("ratesData:", ratesData);

    if (ratesData && ratesData.data) {
      const currencyData = ratesData.data.find(rate => rate.code === currency);

      try {
        if (currencyData !== undefined) {
          const targetAmount = amount / currencyData.value;
          console.log("targetAmount:", targetAmount);

          setResult({
            sourceAmount: +amount,
            targetAmount: targetAmount,
            currency,
          });
        } else {
          console.error(`Nie można znaleźć kursu dla waluty ${currency}`);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    console.log("Przed calculateResult - ratesData:", ratesData);
  }, [ratesData]);

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
