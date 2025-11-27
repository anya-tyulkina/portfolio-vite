import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from "../Testimony_Styled.ts";
import "../../../../../style/Slider.css"
import imgAuthor from "../../../../../assets/images/reviews.jpg";
import {Icon} from "../../../../icon/Icon.tsx";

type SlidePropsType = {
    text: string,
    image: string,
    userName: string,
    position: string
}

const Slide: React.FC<SlidePropsType> = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.TextSlide>{props.text}</S.TextSlide>
            <S.ImageSlide src={props.image} />
            <S.Name>{props.userName}</S.Name>
            <S.Position>{props.position}</S.Position>
        </S.Slide>
    )
}

const items = [
    <Slide position={"ceo - raisins"}
           userName={"Lucas wolfer-1"}
           image={imgAuthor} text={"“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”"}/>,

    <Slide position={"ceo - raisins"}
           userName={"Lucas wolfer-2"}
           image={imgAuthor} text={"“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”"}/>,

    <Slide position={"ceo - raisins"}
           userName={"Lucas wolfer-3"}
           image={imgAuthor} text={"“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”"}/>
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            infinite
            mouseTracking
            items={items}

            renderPrevButton = {() => {
                return (
                    <Icon width={"30"} height={"45"} viewBox={"0 0 30 45"} iconId={"arrow-prev"}/>
                )
            }}

            renderNextButton = {() => {
                return (
                    <Icon width={"30"} height={"45"} viewBox={"0 0 30 45"} iconId={"arrow-next"}/>
                )
            }}
        />
    </S.Slider>
);