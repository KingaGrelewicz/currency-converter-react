import { useState } from 'react';
import { Result } from "./Result";
import { Clock } from "./Clock";
import { 
  StyledForm, 
  Heading, 
  LabelName, 
  FormElement, 
  FormButton, 
  RequiredText, 
  ErrorComponent, 
  LoadingComponent 
} from "./styled";
import { useRatesData } from "./useRatesData"

export const Form = ({ result, calculateResult, currentDate }) => {
  const { rates, loading, error } = useRatesData();
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const onSelectChange = ({ target }) => setCurrency(target.value);
  const onAmountChange = ({ target }) => setAmount(target.value);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  // if (loading) {
  //   return <LoadingComponent>Ładowanie danych...</LoadingComponent>;
  // }

  // if (error) {
  //   return <ErrorComponent $error={error} />;
  // }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Clock currentDate={currentDate} />
      <Heading>Kalkulator walut</Heading>
      <RequiredText>
        Pola wymagane oznaczone są *
      </RequiredText>
      <p>
        <LabelName> Wybierz walutę:
          <FormElement
            value={currency}
            onChange={onSelectChange}
            name="formElement"
          >
            {rates && Object.keys(rates.data).map((rateKey) => (
              <option
                key={rateKey}
                value={rates.data[rateKey].value}
              >
                {rateKey}
              </option>
            ))}
          </FormElement>
        </LabelName>
      </p>
      <p>
        <LabelName>
          Kwota w złotówkach*:
          <FormElement
            as="input"
            value={amount}
            onChange={onAmountChange}
            type="number"
            name="amountElement"
            id="amountElement"
            min="10"
            placeholder="100"
            step="any"
            required
          />
        </LabelName>
      </p>
      <p>
        <FormButton>Przelicz</FormButton>
      </p>
      <Result result={result} />
    </StyledForm>
  )
}