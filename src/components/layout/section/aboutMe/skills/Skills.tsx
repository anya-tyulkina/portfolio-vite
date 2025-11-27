import {FlexWrapper} from "../../../../FlexWrapper.tsx";
import {S} from "../About_Styled.ts";
import * as React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import {useEffect, useState} from "react";
import {Fade} from "react-awesome-reveal";

type SkillsTypeProps = {
    skills: string[];
}

export const Skills: React.FC<SkillsTypeProps> = (props: SkillsTypeProps) => {

    const [width, setWidth] = useState(window.innerWidth)
    const breakpoin = 920;

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        })

        return () => {
            window.removeEventListener("resize", () => {
            })
        }
    }, [])

    return (
        <S.Skills>
            <FlexWrapper direction={"column"} $gap={"34px"} $justify={"space-between"}>
                {
                    props.skills.map((skill, index) => {
                        return (
                            <S.Skill key={index}>
                                <S.SkillList>
                                    <S.SkillItem>{skill}</S.SkillItem>
                                </S.SkillList>
                                <S.ProgressSkill>

                                    {width < breakpoin
                                        ? <Fade cascade={true} damping={1}>
                                            <ProgressBar completed={"30"}
                                                         borderRadius={"0"}
                                                         bgColor={"#3A3422"}
                                                         isLabelVisible={false}
                                                         animateOnRender={true}
                                                         baseBgColor={"#DBDBDB"}
                                                         transitionDuration={"2s"}
                                            />
                                        </Fade>
                                        : <S.ProgressLineSkill width={"30"}/>
                                    }
                                </S.ProgressSkill>
                            </S.Skill>
                        )
                    })
                }
            </FlexWrapper>
        </S.Skills>
    );
};