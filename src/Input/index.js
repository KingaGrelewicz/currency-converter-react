import "./style.css";

const Input = (amount) => (
  <label className="form__labelName">
    Kwota w złotówkach*:
    <input value="amount" className="form__element" type="number" name="amountElement"
      id="amountElement" min="10" placeholder="100" step="any" required autoFocus />
  </label>
)

export default Input;