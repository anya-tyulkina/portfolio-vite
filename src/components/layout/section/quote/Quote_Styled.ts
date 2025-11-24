import styled from "styled-components";
import {font} from "../../../../common/font/font.tsx";
import {theme} from "../../../../style/Theme.tsx";
import quotes from "../../../../assets/images/quotes.svg"


const Quote = styled.section`
    color: #EAEAEA;

    background-color: ${theme.colors.primaryBg};

    position: relative;
    z-index: 0;

    h2 {
        &::before {
            content: "";
            background-color: #EAEAEA;
            width: 220px;
            height: 4px;

            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
        }
    }

    &::before {
        content: "";
        background-image: url("${quotes}");
        max-width: 385px;
        max-height: 320px;
        width: 100%;
        height: 100%;
        
        display: inline-block;
        margin-left: 70px;

        z-index: 1;
        position: absolute;


        top: 0;
        left: 0;
        
        @media ${theme.media.desktop}{
            display: none;
             //background-image: url("");
            // max-width: 150px;
            // max-height: 100px;
            // width: 100%;
            // height: 100%;
        }
    }

    &::after {
        content: "";
        background-image: url("${quotes}");
        max-width: 385px;
        max-height: 320px;
        width: 100%;
        height: 100%;

        display: inline-block;
        margin-right: 60px;

        z-index: 1;
        position: absolute;


        bottom: 0;
        right: 0;
        transform: rotate(180deg);

        @media ${theme.media.desktop}{
            display: none;
            
            // background-image: url("");
            // max-width: 150px;
            // max-height: 100px;
            // width: 100%;
            // height: 100%;
        }
    }
}

`

const WrapperQuote = styled.blockquote`
    max-width: 740px;

    margin-bottom: 50px;
`

const TextQuote = styled.p`
    ${font({Fmin: 20, Fmax: 34, lineHeight: 1.74, color: "#fff"})}
    
    margin-bottom: 50px;
`

const AuthorQuote = styled.cite`
    font-size: 1.1rem;
    ${font({weight: 700, lineHeight: 1.8, color: "#999999"})}
`

export const S = {
    Quote,
    WrapperQuote,
    TextQuote,
    AuthorQuote,
}