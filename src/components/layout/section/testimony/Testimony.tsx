import {SectionTitle} from "../../../SectionTitle.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";
import {Slider} from "./slider/Slider.tsx";
import {Container} from "../../../Container.tsx";
import * as React from "react";
import {S} from "./Testimony_Styled.ts";




export const Testimony: React.FC = () => {
    return (
        <S.Testimony>
            <S.WrapperTestimony>
                <Container>
                    <FlexWrapper direction="column" align={"center"} $justify={"center"}>
                        <S.WrapperSlider>
                            <SectionTitle $borderColor={"#333333"} $fontColorTitle={"#333333"}
                                          $title={"testimonials"} $fontColor={"#FFF"} $bgColor={"#111111"}
                                          subtitle={"what clients says"}/>
                            <Slider/>
                        </S.WrapperSlider>
                    </FlexWrapper>
                </Container>
            </S.WrapperTestimony>
        </S.Testimony>
    );
};