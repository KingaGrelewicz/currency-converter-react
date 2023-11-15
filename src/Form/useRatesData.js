import { useEffect, useState } from 'react';
import axios from 'axios';

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        rates: null,
        loading: false,
        error: "Ups coś poszło nie tak, odśwież stronę",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setRatesData((prevData) => ({
                    ...prevData,
                    loading: true,
                  }));

                await new Promise((resolve) => setTimeout(resolve, 1000));

                const response = await axios.get("../rates.json");
                  
                setRatesData({
                    rates: response.data,
                    loading: false,
                    error: null,
                  });

            } catch (error) {
                console.error(error);
                setRatesData({
                    rates: null,
                    loading: false,
                    error: error.message,
                });
            }
        };

        fetchData();
    }, []);

    return ratesData;
}