import {Container} from "../../../Container.tsx";
import {SectionTitle} from "../../../SectionTitle.tsx";
import {Button} from "../../../Button.tsx";
import {SkillItemType, Skills} from "./skills/Skills.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";
import {S} from "./About_Styled.ts";
import * as React from "react";


const skills: SkillItemType[] = [
    {id: 1, title: "React", progressLine: 50},
    {id: 2, title: "JS", progressLine: 30},
    {id: 3, title: "HTML", progressLine: 70},
    {id: 4, title: "CSS", progressLine: 60}
];

export const AboutMe: React.FC = () => {
    return (
        <S.AboutMe id="about">
            <Container>
                <SectionTitle $title={"About"} subtitle={"Who am i"}/>
                <FlexWrapper $justify={"space-between"} $gap={"80px"} $wrap={"wrap"}>
                    <S.InfoAboutMe>
                        <S.Description>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                            maiores alias consequatur aut perferendis doloribus asperiores repellat quia voluptas sit
                            aspernatur te natus accusan. maiores alias consequatur aut equatur aut
                            perferendi.</S.Description>
                            <Button elemType={"a"} img={"arrow"} text={"About me"}/>
                    </S.InfoAboutMe>
                    <Skills skills={skills}/>
                </FlexWrapper>
            </Container>
        </S.AboutMe>
    );
};
