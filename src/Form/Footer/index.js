import { FooterContainer } from "./styled";
import { useRatesData } from '../useRatesData';

export const Footer = () => {
    const { date } = useRatesData();

    return (
        <FooterContainer>
            Kursy walut zostały pobrane z app.currencyapi.com w dniu {date}
        </FooterContainer>
    )
};