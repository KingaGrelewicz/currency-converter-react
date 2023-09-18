import "./style.css";

const Form = () => (
  <section>
    <label className="form__labelName"> Wybierz walutę:
      <select className="form__element" name="selectElement" id="currencyElement">
        <option value="EUR" selected>Euro</option>
        <option value="USD">Dolar amerykański</option>
        <option value="CHF">Frank szwajcarski</option>
        <option value="JPY">Jen</option>
        <option value="CZK">Korona czeska</option>
        <option value="NOK">Korona norweska</option>
      </select>
    </label>
  </section>
)

export default Form;