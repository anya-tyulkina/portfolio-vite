import styled from "styled-components";
import {theme} from "../../../../style/Theme.tsx";
import {font} from "../../../../common/font/font.tsx";
import mainPhoto from "../../../../assets/images/bgMain.webp"

const Main = styled.section`
    min-height: 100vh;
    max-width: 100%;

    position: relative;

    background: ${theme.colors.primaryBg} url(${mainPhoto}) no-repeat 80% 100% / contain;
`

const WrapperTitleMain = styled.div`
    min-height: 100vh;
    max-width: 720px;
    padding: 100px 15px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    color: ${theme.colors.fontColor};

    position: absolute;
    z-index: 1;
    
    p:first-child {
        display: none;
    } 
    
    & > span:first-child {
        ${font({
            family: "'Inconsolata', monospace",
            Fmax: 22,
            Fmin: 18,
            weight: 800,
            letterSpacing: 0.24,
            color: "#FFFFFF"
        })}
        text-transform: uppercase;

        background-color: #ECECEC2B;
        width: fit-content;

        padding: 0.24em;
    }

    @media ${theme.media.desktop} {
        justify-content: flex-start;
        gap: 20px;
    }
`


const SmallText = styled.span`
`

const TitleMain = styled.h1`
    ${font({Fmax: 110, Fmin: 30, weight: 800, letterSpacing: 0.04, color: `${theme.colors.fontColor}`})}
    white-space: pre-wrap;

    margin: 50px 0 35px;

        @media ${theme.media.tablet} {
        margin: 20px 0 20px;
    }
`

const Name = styled.span``

const TextMain = styled.p`
    margin-bottom: 66px;
    max-width: 720px;
    width: 100%;

    ${font({
        Fmax: 24,
        Fmin: 18,
        letterSpacing: 0.02,
        lineHeight: 1.9,
        color: `${theme.colors.fontColor}`
     })} 
    
    @media ${theme.media.tablet} {
        margin-bottom: 20px;
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

    @media screen and (min-width: 768px) {
        cursor: pointer;

        transition: transform 0.3s ease;
        &:hover {
            transform: scale(1.1);
        }
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
    WrapperTitleMain,
    TitleMain,
    SmallText,
    Name,
    TextMain,
    ButtonMain,
    MainImage
}