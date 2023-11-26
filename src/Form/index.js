import { useState } from 'react';
import { Result } from "./Result";
import { Clock } from "./Clock";
import { useRatesData } from "./useRatesData"
import { Footer } from "./Footer";
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

export const Form = ({ result, calculateResult, ratesData, currentDate }) => {
  const { status, currencies } = useRatesData();
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const onSelectChange = ({ target }) => setCurrency(target.value);
  const onAmountChange = ({ target }) => setAmount(target.value);

  const onFormSubmit = (event) => {
    event.preventDefault();
  
    if (currencies && currencies) {
      calculateResult(amount, currencies);
    } else {
      console.error('Brak danych w currencies');
    }
  };

  if (status === "loading" && !currencies) {
    return <LoadingComponent>Daj nam chwilę, pobieramy dane 😎</LoadingComponent>
  }

  if (status === "error") {
    return <ErrorComponent>Ups, wystąpił błąd 🤷‍♂️, jeśli odświeżenie strony nie pomoże, 
      jest to błąd po naszej stronie 😬</ErrorComponent>
  }

  if (status === "success") {

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
            >
              {Object.keys(currencies).map((rateKey) => (
              <option
                key={rateKey}
                value={rateKey}
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
        <Footer />
      </StyledForm >
    )
  }
}