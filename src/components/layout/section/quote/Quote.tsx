import {Container} from "../../../Container.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";
import {SectionTitle} from "../../../SectionTitle.tsx";
import * as React from "react";
import {S} from "./Quote_Styled.ts";

export const Quote: React.FC = () => {
    return (
        <S.Quote>
            <Container>
                <FlexWrapper direction={"column"} align={"center"} gap={"80px"}>
                    <SectionTitle marginTop={"100px"} borderColor={"none"} title={"Quote of the day"}/>
                    <S.WrapperQuote>
                        <S.TextQuote>“Success is not final; failure is not fatal: it is the courage to continue that
                            counts.”</S.TextQuote>
                        <S.AuthorQuote>-Winston Churchill</S.AuthorQuote>
                    </S.WrapperQuote>
                </FlexWrapper>
            </Container>
        </S.Quote>
    );
};