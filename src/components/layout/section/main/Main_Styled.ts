import styled from "styled-components";
import {theme} from "../../../../style/Theme.tsx";
import {font} from "../../../../common/font/font.tsx";

const Main = styled.section`
    min-height: 100vh;
    max-width: 100%;
    overflow: hidden;

    position: relative;

    background-color: ${theme.colors.primaryBg};
`

const TitleMain = styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    color: ${theme.colors.fontColor};

    position: absolute;
    z-index: 1;

    span:first-child {
        ${font({
    family: "'Inconsolata', monospace",
    Fmax: 18,
    Fmin: 20,
    weight: 800,
    letterSpacing: 0.24,
    color: "#FFFFFF"
})}
        text-transform: uppercase;

        background-color: #ECECEC2B;
        width: fit-content;

        padding: 0.24em;
        z-index: 1;
    }

    @media ${theme.media.desktop}{
        justify-content: flex-start;
        gap: 10px;
    }
`


const SmallText = styled.span``

const TextMain = styled.h1`
    ${font({Fmax: 110, Fmin: 40, weight: 800, letterSpacing: 0.04, color: "#FFFFFF"})}
    white-space: pre-wrap;

    margin: 50px 0 35px;

    @media ${theme.media.desktop} {
        margin: 10px 0 10px;
    }
`

const ButtonMain = styled.button`
    max-width: 250px;
    height: 80px;
    white-space: nowrap;
    text-transform: uppercase;
    cursor: pointer;
    
    background-color: transparent;
    border: 1px solid ${theme.colors.fontColor};
    
    ${font({color: theme.colors.fontColor, letterSpacing: 0.1, weight: 600})}

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 20px 40px;

    
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
    
    
    @media ${theme.media.desktop} {
        max-width: 150px;
        height: 40px;
        
        font-size: 10px;
    }
`

const MainImage = styled.img`
    width: 100%;
    max-height: 100vh;
    object-fit: contain;
    display: block;

    position: absolute;
    z-index: 0;
    bottom: 0;
    right: 0;
`

export const S = {
    Main,
    TitleMain,
    SmallText,
    TextMain,
    ButtonMain,
    MainImage
}