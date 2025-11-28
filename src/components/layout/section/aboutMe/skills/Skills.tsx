import {FlexWrapper} from "../../../../FlexWrapper.tsx";
import {S} from "../About_Styled.ts";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
// import ProgressBar from "@ramonak/react-progress-bar";
// import {useEffect, useState} from "react";
// import {Fade} from "react-awesome-reveal";


export type SkillItemType = {
    id: number
    title: string
    progressLine: number
}


type SkillsTypeProps = {
    skills: SkillItemType[]
}

export const Skills: React.FC<SkillsTypeProps> = ({skills}) => {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Отключаем наблюдение после первой анимации
                    observer.disconnect();
                }
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);
    // const [width, setWidth] = useState(window.innerWidth)
    // const breakpoin = 920;
    //
    // useEffect(() => {
    //     window.addEventListener("resize", () => {
    //         setWidth(window.innerWidth);
    //     })
    //
    //     return () => {
    //         window.removeEventListener("resize", () => {
    //         })
    //     }
    // }, [])

    return (
        <S.Skills ref={ref}>
            <FlexWrapper direction={"column"} $gap={"34px"} $justify={"space-between"}>
                {
                    skills.map((skill, index) => {
                        return (
                            <S.Skill key={skill.id}>
                                <S.SkillList>
                                    <S.SkillItem>{skill.title}</S.SkillItem>
                                </S.SkillList>
                                <S.ProgressSkill>

                                    <S.ProgressLineSkill $isVisible={isVisible} $width={skill.progressLine} $delay={index + "200ms"}/>

                                    {/*{width < breakpoin*/}
                                    {/*    ? <Fade cascade={true} damping={1}>*/}
                                    {/*        <ProgressBar completed={"30"}*/}
                                    {/*                     borderRadius={"0"}*/}
                                    {/*                     bgColor={"#3A3422"}*/}
                                    {/*                     isLabelVisible={false}*/}
                                    {/*                     animateOnRender={true}*/}
                                    {/*                     baseBgColor={"#DBDBDB"}*/}
                                    {/*                     transitionDuration={"2s"}*/}
                                    {/*        />*/}
                                    {/*    </Fade>*/}
                                    {/*}*/}
                                </S.ProgressSkill>
                            </S.Skill>
                        )
                    })
                }
            </FlexWrapper>
        </S.Skills>
    );
};