import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --hue: 240;
        --base-color: hsl(var(--hue) 36% 57%);
        --base-color-second: hsl(var(--hue) 65% 88%);
        --base-color-alt: hsl(var(--hue) 57% 53%);
        --title-color: hsl(var(--hue) 41% 10%);
        --text-color: hsl(0 0% 46%);
        --text-color-light: hsl(0 0% 98%);
        --body-color: hsl(0 0% 98%);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* customize font-sizes for better acessibility */
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--body-color);
        -webkit-font-smoothing: antialiased; // make font shaper
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: var(--text-color)
    }

    h1, h2, h3, h4, h5, h6, strong {
        color: var(--title-color);
        font-weight: 600;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    button {
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    ::placeholder {
        color: var(--text-body)
    }
`;
