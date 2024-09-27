import styled from "styled-components"

export const StyledForm = styled.form`
    border: 2px solid ${({ theme }) => theme.colors.crusoe};
    border-radius: 10px;
    padding: 10px 20px;
    background-color: ${({theme}) => theme.colors.athensGray};
    box-shadow: 5px 4px 18px -4px ${({theme}) => theme.colors.springLeaves};
`;

export const Heading = styled.h1`
    color: ${({theme}) => theme.colors.shark};
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
    border: 2px solid ${({ theme }) => theme.colors.crusoe};
    border-radius: 10px;
    padding: 10px;
    width: 100%;
`;


export const FormButton = styled.button`    
    color: ${({ theme }) => theme.colors.aliceBlue};
    background-color: ${({ theme }) => theme.colors.crusoe};
    border-radius: 10px;
    border: none;
    margin: 10px 0;
    padding: 5px;
    width: 100%;
    box-shadow: 5px 4px 18px -4px ${({theme}) => theme.colors.springLeaves};
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        filter: brightness(120%);
        transform: scale(1.05);
    }

    &:active {
        filter: brightness(140%);
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

export const ErrorComponent = styled.div`
    color: ${({theme}) => theme.colors.monza};
    border: 2px solid ${({ theme }) => theme.colors.crusoe};
    border-radius: 10px;
    padding: 100px 20px;
    background-color: ${({theme}) => theme.colors.athensGray};
    box-shadow: 5px 4px 18px -4px ${({theme}) => theme.colors.springLeaves};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
`;

export const LoadingComponent = styled.p`
    color: ${({theme}) => theme.colors.shark};
    border: 2px solid ${({ theme }) => theme.colors.crusoe};
    border-radius: 10px;
    padding: 100px 20px;
    background-color: ${({theme}) => theme.colors.athensGray};
    box-shadow: 5px 4px 18px -4px ${({theme}) => theme.colors.springLeaves};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
`;