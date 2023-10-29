import { StyledClock } from "./styled";
import { useEffect, useState } from 'react';

export const Clock = () => {
  const [date, setDate] = useState(new Date());
  const currentDate = date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date(date.getTime() + 1000));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [date]);

  return (
    <StyledClock>Dzisiaj jest {currentDate}</StyledClock>
  );
}