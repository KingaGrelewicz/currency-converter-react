    import { useEffect, useState } from 'react';
    import axios from 'axios';

    const apiAddress = ("/rates.json");

    export const useRatesData = () => {
        const [ratesData, setRatesData] = useState({
            status: "loading",
        });

        useEffect(() => {
            const fetchData = async () => {
                try {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    const response = await axios.get(apiAddress);

                    setRatesData({
                        status: "success",
                        currencies: response.data.data,
                        date: new Date(response.data.meta.last_updated_at).toLocaleString(),
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

        return {
            ...ratesData,
        };
    }