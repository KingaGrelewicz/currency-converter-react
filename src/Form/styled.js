import styled from "styled-components"

export const StyledForm = styled.form`
    border: 2px solid #034303;
    border-radius: 10px;
    padding: 10px 20px;
    background-color: #f2f2f3;
    box-shadow: 5px 4px 18px -4px #557A59;
`;

export const Name = styled.h1`
    color:#1d1d1e;
    font-style: italic;
    font-size: 40px;
    display: flex;
    justify-content: center;
`;

export const LabelName = styled.label`
    display: grid;
    grid-template-columns: auto 350px;
    grid-gap: 12px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const FormElement = styled.select`
    border: 2px solid #034303;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
`;


export const FormButton = styled.button`    
    color: #f0f8ff;
    background-color: #034303;
    border-radius: 10px;
    border: none;
    margin: 10px 0;
    padding: 5px;
    width: 100%;
    box-shadow: 5px 4px 18px -4px #557A59;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: hsl(120, 91%, 30%);
        transform: scale(1.05);
    }

    &:active {
        background-color: hsl(120, 91%, 40%);
    }

    @media ${({ theme }) => theme.breakpoints.mobile}px {
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        border: none;
        padding: 10px;
        margin: 0 auto;
    }
`;

export const RequiredText = styled.p`
    width: 100%;
    font-size: 12px;
    font-style: italic;
`;