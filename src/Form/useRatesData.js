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
                const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_etULAae4hL6redqwftsRZRwwZliL1twfy51hbI5m&currencies=EUR%2CUSD%2CCAD&base_currency=PLN");

                setRatesData({
                    status: "success",
                    currencies: Object.keys(response.data.data)
                        .map(key => response.data.data[key].code),
                    rate: Object.values(response.data.data).map(item => item.value),
                    date: new Date(response.data.meta.last_updated_at).toLocaleString(),
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