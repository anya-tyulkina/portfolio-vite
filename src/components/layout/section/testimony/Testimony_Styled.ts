import styled from "styled-components";
import {theme} from "../../../../style/Theme.tsx";
import bgImg from "../../../../assets/images/bgAchievement.jpg";
import arrow from "../../../../assets/images/arrowPagination.svg";


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
    
    @media screen and (min-width: 768px) {
        padding: 80px 100px;
    }
`

const PaginationButton = styled.button`
    background-image: url("${arrow}");
    background-repeat: no-repeat;
    width: 25px;
    height: 50px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    
    @media ${theme.media.tablet} {
        display: none;
    }
`;

const PaginationPrev = styled(PaginationButton)`
    left: 0;
    transform: translateY(-50%) rotate(180deg);

    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-50%) rotate(180deg) scale(1.3);
    }
`;

const PaginationNext = styled(PaginationButton)`
    right: 0;

    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-50%) scale(1.3);
    }
`;

const PaginationMobile = styled.div`

    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }

    width: fit-content;
    margin-top: 60px;

    span {
        display: inline-block;
        margin: 0 5px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: #fff;
    }

    span:nth-child(2) {
        background-color: rgba(106, 100, 100, 0.83);
        border-radius: 30%;

        width: 20px;
        height: 7px;
    }
`


// slider

const Slider = styled.ul`
    margin-top: 55px;

    position: relative;
`
const Slide = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
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
    line-height: 225%;
    letter-spacing: 0.02em;
    text-transform: capitalize;
`
const Position = styled.span`
    line-height: 178.5%;
    letter-spacing: 0.05em;
    font-size: 14px;
    text-transform: uppercase;
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
    PaginationButton,
    PaginationPrev,
    PaginationNext,
    PaginationMobile,
    Slider,
    Slide,
    ImageSlide,
    Name,
    Position,
    TextSlide
}