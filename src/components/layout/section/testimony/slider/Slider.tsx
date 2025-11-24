import {TestimonyListType} from "../Testimony.tsx";
import * as React from "react";
import {S} from "../Testimony_Styled.ts";

type SliderPropsType = {
    testimonyList: TestimonyListType
}

export const Slider: React.FC<SliderPropsType> = (props: SliderPropsType) => {
    return (
        <S.Slider>
            {
                props.testimonyList.map((items) => {
                    return (
                        <S.Slide>
                            <S.TextSlide>{items.text}</S.TextSlide>
                            <S.ImageSlide src={items.image}/>
                            <S.Name>{items.author}</S.Name>
                            <S.Position>{items.position}</S.Position>
                        </S.Slide>
                    )
                })
            }
        </S.Slider>
    );
};