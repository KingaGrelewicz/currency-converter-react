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
                const metaDate = response.data.meta.last_updated_at;

                const formattedDate = new Date(metaDate).toLocaleString();

                setRatesData({
                    status: "success",
                    data: Object.values(response.data),
                    date: formattedDate , 
                });
                
            } catch (error) {
                console.error("Błąd ładowania danych:", error);
                setRatesData({
                    status: "error",
                    data: null,
                    date: null,
                });
            }
        };

        fetchData();
    }, []);

    return {
        ...ratesData,
        formattedDate: ratesData.date,
    };
}