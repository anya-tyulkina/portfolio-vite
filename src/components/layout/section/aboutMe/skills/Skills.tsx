import {FlexWrapper} from "../../../../FlexWrapper.tsx";
import {S} from "../About_Styled.tsx";
import * as React from "react";

type SkillsTypeProps = {
    skills: string[];
}

export const Skills: React.FC<SkillsTypeProps> = (props: SkillsTypeProps) => {
    return (
        <S.Skills>
            <FlexWrapper direction={"column"} gap={"34px"} justify={"space-between"} wrap={"wrap"}>
                {
                    props.skills.map((skill, index) => {
                        return (
                            <S.Skill key={index}>
                                <S.SkillList>
                                    <S.SkillItem>{skill}</S.SkillItem>
                                </S.SkillList>
                                <S.ProgressSkill>
                                    <S.ProgressLineSkill width={"30"}/>
                                </S.ProgressSkill>
                            </S.Skill>
                        )
                    })
                }
            </FlexWrapper>
        </S.Skills>
    );
};