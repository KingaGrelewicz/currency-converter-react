import { useEffect, useState } from "react";

export const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      setDate(currentDate);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return date;
}