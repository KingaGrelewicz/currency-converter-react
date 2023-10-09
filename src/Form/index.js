import "./style.css";
import { useState } from 'react';
import { currencies } from "./currencies";
import { Result } from "./Result";

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
    <form className="form" onSubmit={onFormSubmit}>
      <span className="form__date">Dzisiaj jest {currentDate}</span>
      <h1 className="form__name">Kalkulator walut</h1>
      <p className="form__requiredText">
        Pola wymagane oznaczone są *
      </p>
      <p>
        <label className="form__labelName"> Wybierz walutę:
          <select
            value={currency}
            onChange={onSelectChange}
            className="form__element"
            name="selectElement"
          >
            <option value="">Wybierz walutę</option>
            {currencies.map((currency => (
              <option
                key={currency.short}
                value={currency.short}
              >
                {currency.name}
              </option>
            )))}
          </select>
        </label>
      </p>
      <p>
        <label className="form__labelName">
          Kwota w złotówkach*:
          <input
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
            autoFocus />
        </label>
      </p>
      <p>
        <button className="form__button">Przelicz</button>
      </p>
      <Result result={result} />
    </form>
  )
}