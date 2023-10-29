import { useState } from 'react';
import { currencies } from "./currencies";
import { Result } from "./Result";
import { Clock } from "./Clock";
import { StyledForm, Name, LabelName, FormElement, FormButton, RequiredText } from "./styled";

export const Form = ({ result, calculateResult, currentDate }) => {
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const onSelectChange = ({ target }) => setCurrency(target.value);
  const onAmountChange = ({ target }) => setAmount(target.value);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Clock currentDate={currentDate}/>
      <Name className="form__name">Kalkulator walut</Name>
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
            {currencies.map((currency => (
              <option
                key={currency.short}
                value={currency.short}
              >
                {currency.name}
              </option>
            )))}
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
            className="form__element"
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