import styled from "styled-components";
import {font} from "../../../../common/font/font.tsx";

//about me
const AboutMe = styled.section`
    padding-top: 100px;
`

const InfoAboutMe = styled.div`
    width: 450px;
    margin-top: 20px;

    flex-grow: 1;
`

const Description = styled.p`
    ${font({letterSpacing: 0.02, lineHeight: 2.38, color: "#555555"})}

    margin-bottom: 60px;
`

//skills

const Skills = styled.div`
    width: 400px;
    flex-grow: 1;
`

const Skill = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const ProgressLineSkill = styled.div<{width?: string}>`
    background-color: #3A3422;
    width: ${props => props.width || "0"}%;
    height: 2px;
    
    @media screen and (max-width: 960px) {
        height: 10px;
    }
`

const SkillList = styled.ul`

`

const SkillItem = styled.li`
    color: #2F2F2F;
    letter-spacing: 0.15em;
    text-transform: uppercase;
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