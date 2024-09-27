import { StyledResult } from "./styled";

type ResultProps = {
  result: {
    sourceAmount: number;
    targetAmount: number;
    currency: string;
  } | null;
  isResultVisible: boolean;
};

export const Result = ({ result, isResultVisible }: ResultProps) => {
  return (
    <StyledResult>
      {isResultVisible && result &&(
        <>
          {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
          <strong>
            {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
          </strong>
        </>
      )}
    </StyledResult>
  );
};
