import { FooterContainer } from "./styled";

interface FooterProps {
    date: string;
}

export const Footer = ({ date }: FooterProps) => {
    return (
        <FooterContainer>
            Kursy walut zostały pobrane z https://api.nbp.pl w dniu {date}
        </FooterContainer>
    );
};