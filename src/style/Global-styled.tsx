import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.tsx";

export const GlobalStyle = createGlobalStyle`
    
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    body {
        margin:  0;
        min-width: 360px;
        overflow-x: hidden;
        font-family: "Manrope", "Inconsolata", "Jost", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 17px;
    }
    
    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    input {
        max-width: 400px;
        width: 100%;
        min-height: 25px;
    }
    
    @media ${theme.media.tablet} {
        section {
            padding-top: 50px !important;
            padding-bottom: 50px !important;
        }
    }
    
`