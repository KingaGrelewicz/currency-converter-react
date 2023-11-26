import { useEffect, useState } from 'react';
import axios from 'axios';

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
        currencies: null,
        rate: null,
        date: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));

                const response = await axios.get("../rates.json");
                const metaDate = response.data.meta.last_updated_at;

                const formattedDate = new Date(metaDate).toLocaleString();
                console.log(ratesData);
                setRatesData({
                    status: "success",
                    currencies: response.data.data,
                    rate: response.data.value,
                    date: formattedDate, 
                });
                
            } catch (error) {
                console.error(error);
                setRatesData({
                    status: "error",
                    currencies: null,
                    rate: null,
                    date: null,
                });
            }
        };

        fetchData();
    }, []);

    return {
        ...ratesData,
    };
}