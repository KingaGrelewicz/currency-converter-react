import "./style.css";

const Result = ({ calculateResult }) => {
   return (
      <>
         <button onClick={() => calculateResult()} className="form__button">Przelicz</button>
         <span
            className="result"
         >
            {calculateResult}
         </span>
      </>
   )
}

export default Result;