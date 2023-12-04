import { useState } from 'react';
import { Result } from "./Result";
import { Clock } from "./Clock";
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

export const Form = ({ ratesData, result, calculateResult, currentDate, isResultVisible }) => {
  const { status, currencies } = ratesData;
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const onSelectChange = ({ target }) => setCurrency(target.value);
  const onAmountChange = ({ target }) => setAmount(target.value);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
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
          <LabelName> Wybierz walutę:
            <FormElement
              value={currency}
              onChange={onSelectChange}
            >
              <option value="" disabled>Wybierz z listy</option>
              {Object.keys(currencies).map((currency) => (
                <option 
                  key={currency} 
                  value={currency}>
                  {currency}
                </option>
              ))}
            </FormElement>
          </LabelName>
        </p>
        <p>
          <FormButton>Przelicz</FormButton>
        </p>
        <Result result={result} isResultVisible={isResultVisible} />
        <Footer date={ratesData.date}/>
      </StyledForm >
    )
  }
}