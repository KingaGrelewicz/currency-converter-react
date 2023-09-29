import "./style.css";

const Form = ({ currencies, selectedCurrency, amount, setSelectedCurrency, setAmount }) => {

  const onSelectChange = ({ target }) => setSelectedCurrency(target.value);
  const onAmountChange = ({ target }) => setAmount(target.value);

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label className="form__labelName"> Wybierz walutę:
        <select
          value={selectedCurrency}
          onChange={onSelectChange}
          className="form__element"
          name="selectElement"
        >
          <option value="">Wybierz walutę</option>
          {currencies?.map(currency => (
            <option key={currency.id} value={currency.id}>
              {currency.name}
            </option>
          ))}
        </select>
      </label>
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
    </form>
  )
}

export default Form;