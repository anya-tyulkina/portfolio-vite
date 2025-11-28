import styled, {keyframes} from "styled-components";
import {font} from "../../../../common/font/font.tsx";
import {theme} from "../../../../style/Theme.tsx";


//about me
const AboutMe = styled.section`
    padding-top: 90px;

    h2 {
        width: fit-content;
    }

    @media ${theme.media.desktop} {
        padding-top: 30px;
    }
`

const InfoAboutMe = styled.div`
    flex-grow: 1;

    @media screen and (min-width: 920px) {
        width: 300px;
        max-width: 650px;
    }
`

const Description = styled.p`
    ${font({Fmax: 18, Fmin: 22, letterSpacing: 0.02, lineHeight: 2.38, color: "#555555"})}

    margin: 20px 0 60px;
`

//skills

const Skills = styled.div`
    flex-grow: 1;

    @media screen and (min-width: 920px) {
        width: 300px;
        max-width: 500px;
    }
`

const Skill = styled.article`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const SkillList = styled.ul`

`

const SkillItem = styled.li`
    color: #2F2F2F;
    letter-spacing: 0.15em;
    text-transform: uppercase;
`

const ProgressLineSkill = styled.div<{ $width?: number, $isVisible?: boolean, $delay?: string }>`
    background-color: #3A3422;
    width: 0;
    height: 2px;

    animation: ${props => props.$isVisible ? keyframes`
        from {
            width: 0%;
        }
        to {
            width: ${props.$width || 0}%;
        }
    ` : "none"} 1s ease-out ${props => props.$delay || "0ms"} forwards;
    

    @media ${theme.media.desktop} {
        height: 10px;
    }
`

const ProgressSkill = styled.div`
    width: 100%;
    background-color: #DBDBDB;
`

export const S = {
    AboutMe,
    InfoAboutMe,
    Description,
    Skills,
    Skill,
    ProgressLineSkill,
    SkillList,
    SkillItem,
    ProgressSkill
}