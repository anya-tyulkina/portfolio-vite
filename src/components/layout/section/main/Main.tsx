import {Container} from "../../../Container.tsx";
import {S} from "./Main_Styled.ts";
import * as React from "react";
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <S.WrapperTitleMain>
                    <S.SmallText>hi! everyone</S.SmallText>
                    <S.TitleMain>
                        <p>Anna Web Dev</p>
                        <S.Name>Anna</S.Name>
                        <Typewriter
                            options={{
                                strings: ['A Web Dev'],
                                autoStart: true,
                                loop: true,
                                delay: 300,
                            }}
                        />
                    </S.TitleMain>
                    <S.TextMain>Make designs mainly logos, visual identities, apps & websites, social media and magazines.</S.TextMain>
                    <S.ButtonMain as="a">Get in touch</S.ButtonMain>
                </S.WrapperTitleMain>
            </Container>
        </S.Main>
    );
};
