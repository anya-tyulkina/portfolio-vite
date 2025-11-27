import styled from "styled-components";
import {theme} from "../../../../style/Theme.tsx";
import bgImg from "../../../../assets/images/bgAchievement.jpg";
import {font} from "../../../../common/font/font.tsx";

const Testimony = styled.section`
    color: ${theme.colors.fontColor};
`

const WrapperTestimony = styled.div`

    background-image: url(${bgImg});
    background-position: 100% 10%;
    background-size: cover;
    z-index: 0;
    position: relative;

    &::before {
        content: "";
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;

        z-index: -1;
        position: absolute;
    }

    //@media screen and (min-resolution: 2dppx) {
    //    background-image: url("/src/assets/images/bgImage.jpg");
    //    background-color: rgba(0, 0, 0, 0.41);
    //    background-position: 100% 10%;
    //}
`

const WrapperSlider = styled.div`
    padding: 30px 20px;

    position: relative;
    overflow: hidden;
    
    width: 100%;
`


// slider

const Slider = styled.div`
    max-width: 916px;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    
    margin: 55px 0 145px;
`
const Slide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const ImageSlide = styled.img`
    max-width: 66px;
    max-height: 66px;
    width: 100%;
    height: 100%;
    
    border-radius: 100%;
    object-fit: cover;
    
    margin-top: 50px;
`

const Name = styled.span`
    font-size: 21px;
    ${font({lineHeight: 2.25, letterSpacing: 0.02})}
    text-transform: capitalize;
`
const Position = styled.span`
    font-size: 14px;
    text-transform: uppercase;
    ${font({lineHeight: 1.78, letterSpacing: 0.05})}
`

const TextSlide = styled.p`
    max-width: 900px;
    width: 100%;

    font-size: calc((100vw - 360px) / (1920 - 360) * (28 - 18) + 18px);
    line-height: 183%;
    letter-spacing: 0.01em;
`

export const S = {
    Testimony,
    WrapperTestimony,
    WrapperSlider,
    Slider,
    Slide,
    ImageSlide,
    Name,
    Position,
    TextSlide
}