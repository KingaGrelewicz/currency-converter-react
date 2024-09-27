import { ChangeEvent, FormEvent, useState } from "react";
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
  LoadingComponent,
} from "./styled";

type CurrencyResult = {
  sourceAmount: number;
  targetAmount: number;
  currency: string;
} | null;

type FormProps = {
  ratesData: {
    status: "loading" | "success" | "error";
    currencies?: Record<string, number>;
    date?: string;
  };
  result: CurrencyResult;
  calculateResult: (currency: string, amount: number) => void;
  currentDate: Date;
  isResultVisible: boolean;
};

export const Form = ({
  ratesData,
  result,
  calculateResult,
  currentDate,
  isResultVisible,
}: FormProps) => {
  const { status, currencies } = ratesData;
  const [currency, setCurrency] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setCurrency(event.target.value);
  const onAmountChange = (event: ChangeEvent<HTMLInputElement>) =>
    setAmount(event.target.value);

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const numericAmount = parseFloat(amount) || 0;
    calculateResult(currency, numericAmount);
  };

  if (status === "loading" && !currencies) {
    return (
      <LoadingComponent>Daj nam chwilę, pobieramy dane 😎</LoadingComponent>
    );
  }

  if (status === "error") {
    return (
      <ErrorComponent>
        Ups, wystąpił błąd 🤷‍♂️, jeśli odświeżenie strony nie pomoże, jest to błąd
        po naszej stronie 😬
      </ErrorComponent>
    );
  }

  if (status === "success") {
    return (
      <StyledForm onSubmit={onFormSubmit}>
        <Clock currentDate={currentDate} />
        <Heading>Kalkulator walut</Heading>
        <RequiredText>Pola wymagane oznaczone są *</RequiredText>
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
              placeholder="min 10"
              step="any"
              required
            />
          </LabelName>
        </p>
        <p>
          <LabelName>
            {" "}
            Wybierz walutę:
            <FormElement value={currency} onChange={onSelectChange}>
              <option value="" disabled>
                Wybierz z listy
              </option>
              {!currencies ? (
                <option value="" disabled>
                  Brak dostępnych walut
                </option>
              ) : (
                Object.keys(currencies).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))
              )}
            </FormElement>
          </LabelName>
        </p>
        <p>
          <FormButton>Przelicz</FormButton>
        </p>
        {isResultVisible && result && (
          <Result result={result} isResultVisible={isResultVisible} />
        )}
        <Footer date={ratesData.date ?? "Nieznana data"} />
      </StyledForm>
    );
  }

  return null;
};
