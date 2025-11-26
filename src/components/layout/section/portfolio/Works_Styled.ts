import styled from "styled-components";
import {theme} from "../../../../style/Theme.tsx";

const Works = styled.section`
    padding: 116px 0 200px;

    @media ${theme.media.desktop} {
        padding: 50px 0 100px;
    }
`

const WrapperWorks = styled.div`
    
    column-count: 2;
    column-gap: 60px;

    @media ${theme.media.desktop} {
        column-count: 1;
        
        a {
            margin: 0 auto; 
        }
    }
`


const WorkWrapper = styled.article`
    width: 100%;
    flex-grow: 1;
    
    margin-top: 40px;
    
    @media screen and (min-width: 920px) {
        max-width: 600px;
    }
`

const Work = styled.figure`
    display: inline-block;
    margin-bottom: 62px;
    text-align: right;
    width: 100%;
    
    @media ${theme.media.desktop} {
        text-align: left;
    }
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`

const Title = styled.figcaption`
    display: inline-block;
    margin-top: 20px;
    font-size: 26px;
    text-transform: lowercase;
    color: ${theme.colors.fontColorSecondary};
    position: relative;

    &::before {
        content: "";
        background-color: ${theme.colors.fontColorSecondary};;
        display: inline-block;

        height: 3px;
        width: 100%;

        position: absolute;
        bottom: -2px;
    }
`

export const S = {
    Works,
    WrapperWorks,
    WorkWrapper,
    Work,
    Image,
    Title
}