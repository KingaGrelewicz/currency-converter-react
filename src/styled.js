import { createGlobalStyle } from "styled-components";
import background from "./images/background01.jpg";

export const GlobalStyled = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background-image: url("${background}");
        background-size: cover;
    }
`;