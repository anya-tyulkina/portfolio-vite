import {SectionTitle} from "../../../SectionTitle.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";
import {Slider} from "./slider/Slider.tsx";
import {Container} from "../../../Container.tsx";
import imgAuthor from "../../../../assets/images/reviews.jpg";
import * as React from "react";
import {S} from "./Testimony_Styled.ts";

const testimonyList = [
    {
        id: 1,
        text: "“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”",
        author: "Lucas wolfer",
        image: imgAuthor,
        position: "ceo - raisins"
    },
    // {
    //     id: 2,
    //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //     author: "Lucas wolfer",
    //     image: imgAuthor,
    //     branch: "ceo - raisins"
    // },
    // {
    //     id: 3,
    //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //     author: "Lucas wolfer",
    //     image: imgAuthor,
    //     branch: "ceo - raisins"
    // },
    // {
    //     id: 4,
    //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //     author: "Lucas wolfer",
    //     image: imgAuthor,
    //     branch: "ceo - raisins"
    // }
]

export type TestimonyListType = typeof testimonyList

export const Testimony: React.FC = () => {
    return (
        <S.Testimony>
            <S.WrapperTestimony>
                <Container>
                    <FlexWrapper direction="column" align={"center"} justify={"center"}>
                        <S.WrapperSlider>
                            <S.PaginationPrev/>
                            <SectionTitle borderColor={"#333333"} fontColorTitle={"#333333"}
                                          title={"testimonials"} fontColor={"#FFF"} bgColor={"#111111"}
                                          subtitle={"what clients says"}/>
                            <Slider testimonyList={testimonyList}/>
                            <S.PaginationNext/>
                            <S.PaginationMobile>
                                <span></span>
                                <span></span>
                                <span></span>
                            </S.PaginationMobile>
                        </S.WrapperSlider>
                    </FlexWrapper>
                </Container>
            </S.WrapperTestimony>
        </S.Testimony>
    );
};