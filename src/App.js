import Container from "./Container";
import Title from "./Title";
import RequiredText from "./RequiredText";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import Result from "./Result";


function App() {
  return (
    <Container>
      <form>
        <fieldset className="form__fieldset">
          <Title />
          <RequiredText />
          <Form />
          <Input />
          <Button />
          <Result />
        </fieldset>
      </form>
    </Container>
  );
}

export default App;
