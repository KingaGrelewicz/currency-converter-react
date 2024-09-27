import { formatDate } from "../utils";
import { StyledClock } from "./styled";


interface ClockProps {
  currentDate: Date;
}

export const Clock = ({ currentDate}: ClockProps) => {
  
  return (
    <StyledClock>
      Dzisiaj jest
      {" "}
      {formatDate(currentDate)}
    </StyledClock>
  );
}