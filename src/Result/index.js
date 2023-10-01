import "./style.css";

const Result = ({ result }) => {
   return (
      <span className="result">
         {result !== null && result}
      </span>
   );
};

export default Result;