import "./style.css";

const Button = ({calculateResult}) => (
    <button onClick={calculateResult} className="form__button">Przelicz</button>
)

export default Button;