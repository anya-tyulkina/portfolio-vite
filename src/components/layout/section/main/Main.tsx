import mainPhoto from "../../../../assets/images/bgMain.webp"
import {Container} from "../../../Container.tsx";
import {S} from "./Main_Styled.ts";
import * as React from "react";

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <S.TitleMain>
                    <S.SmallText>hi! everyone</S.SmallText>
                    <S.TextMain>Anna{"\n"}Web Dev</S.TextMain>
                    <S.ButtonMain as="a">Get in touch</S.ButtonMain>
                </S.TitleMain>
                <S.MainImage src={mainPhoto}/>
            </Container>
        </S.Main>
    );
};
