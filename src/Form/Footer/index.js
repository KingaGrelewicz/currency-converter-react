import { FooterContainer } from "./styled";
import { useRatesData } from '../useRatesData';

export const Footer = () => {
    const { date } = useRatesData();

    const formattedDate = date ? date : "";

    return (
        <FooterContainer>
            Kursy walut zostały pobrane z app.currencyapi.com w dniu {formattedDate}
        </FooterContainer>
    )
};
