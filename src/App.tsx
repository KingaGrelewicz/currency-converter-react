import { useState } from 'react';
import StyledContainer from "./Container";
import { Form } from "./Form";
import { GlobalStyled } from "./styled";
import { useRatesData } from "./Form/useRatesData";
import { useCurrentDate } from './Form/Clock/useCurrentDate';

type CurrencyResult = {
  sourceAmount: number;
  targetAmount: number;
  currency: string;
} | null;

function App() {
  const [result, setResult] = useState<CurrencyResult>(null);
  const [isResultVisible, setIsResultVisible] = useState<boolean>(false);
  const ratesData = useRatesData();
  const currentDate = useCurrentDate();

  const calculateResult = (currency: string, amount: number) => {
    const currencies = ratesData.currencies?.[currency];

    if (!currencies) {
      console.error("Currency data not available.");
      return;
    }

      const currencyData = currencies;

      setResult({
        sourceAmount: +amount,
        targetAmount: amount * currencyData,
        currency,
      });

      setIsResultVisible(true);
    }


  return (
    <StyledContainer>
      <GlobalStyled />
      <Form
        result={result}
        calculateResult={calculateResult}
        ratesData={ratesData}
        isResultVisible={isResultVisible}
        currentDate={currentDate}
      />
    </StyledContainer>
  );
}

export default App; 
