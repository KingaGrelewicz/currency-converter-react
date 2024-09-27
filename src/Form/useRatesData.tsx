import { useEffect, useState } from "react";
import axios from "axios";

const apiAddress = "https://api.nbp.pl/api/exchangerates/tables/A/";

type RatesTable = {
  table: string;
  no: string;
  effectiveDate: string;
  rates: {
    currency: string;
    code: string;
    mid: number;
  }[];
};

type RatesResponse = RatesTable[];

type RatesData = {
  status: "loading" | "success" | "error";
  currencies?: Record<string, number>;
  date?: string;
};

export const useRatesData = (): RatesData => {
  const [ratesData, setRatesData] = useState<RatesData>({
    status: "loading",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await axios.get<RatesResponse>(apiAddress);

        const rates = response.data?.[0]?.rates ?? [];

        const currencies = rates.reduce<Record<string, number>>((acc, rate) => {
          acc[rate.code] = rate.mid;
          return acc;
        }, {});

        setRatesData({
          status: "success",
          currencies,
          date: new Date(response.data?.[0]?.effectiveDate).toLocaleString(),
        });
      } catch (error) {
        console.error(error);
        setRatesData({
          status: "error",
        });
      }
    };

    fetchData();
  }, []);

  return ratesData;
};
