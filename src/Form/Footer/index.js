import { FooterContainer } from "./styled";

export const Footer = ({ date }) => {
    return (
        <FooterContainer>
            Kursy walut zostały pobrane z app.currencyapi.com w dniu {date}
        </FooterContainer>
    );
};