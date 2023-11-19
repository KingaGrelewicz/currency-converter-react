import { FooterContainer } from "./styled";
import { useRatesData } from '../useRatesData';

export const Footer = () => {
    const { formattedDate } = useRatesData();

    return (
        <FooterContainer>
            Kursy walut zostały pobrane z app.currencyapi.com w dniu {formattedDate}
        </FooterContainer>
    )
};