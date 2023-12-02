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

                const response = await axios.get("/rates.json");
                console.log("Response data:", response.data);

                console.log("Before setRatesData:", ratesData);

                setRatesData({
                    status: "success",
                    currencies: Object.keys(response.data.data)
                        .map(key => response.data.data[key].code),
                    rate: Object.values(response.data.data).map(item => item.value),
                    // date: formattedDate,
                });

                console.log("After setRatesData:", ratesData);

            } catch (error) {
                console.error(error);
                setRatesData({
                    status: "error",
                    currencies: null,
                    rate: null,
                    // date: null,
                });
            }
        };

        fetchData();
    }, []);

    return {
        ...ratesData,
    };
}