import { useEffect, useState } from 'react';
import axios from 'axios';

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
        data: null,
        date: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));

                const response = await axios.get("../rates.json");
                const metaDate = response.data.meta.someDate;

                const formattedDate = new Date(metaDate).toLocaleString();

                setRatesData({
                    status: "success",
                    data: Object.values(response.data),
                    date: formattedDate , 
                });

            } catch {
                setRatesData({
                    status: "error",
                    data: null,
                });
            }
        };

        fetchData();
    }, []);

    return ratesData;
}