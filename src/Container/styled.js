import styled from "styled-components";

export const StyledContainer = styled.main`
    max-width: 570px;
    width: 100%;
    margin: 50px auto;
    font-family: 'Open Sans', sans-serif;
    
    @media (max-width: 570px) {
        margin: 50px auto;
        padding: 10px;
        max-width: 100%;
    }
`;