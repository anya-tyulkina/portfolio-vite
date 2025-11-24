import styled from "styled-components";
import {font} from "../../../../common/font/font.tsx";

const Achievement = styled.section`
    padding: 200px 0 120px;
`

const AchievementItem = styled.article`
    width: 300px;
    flex-grow: 1;
    margin-top: 55px;
    
    @media screen and (min-width: 1140px) {
        max-width: 384px;
    }

    @media screen and (max-width: 689px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
`

const TitleAchievement = styled.h3`
    font-size: 22px;
    ${font({color: "#111111", weight: 500})}
`

const AchievementText = styled.p`
    width: fit-content;
    ${font({Fmax: 19, Fmin: 17, color: "#282828", weight: 300, lineHeight: 1.88, letterSpacing: 0.04})}
    
    position: relative;

    padding-bottom: 40px;
    
    &::before {
        content: "";
        background-color: #E2E2E2;
        width: 100%;
        height: 1px;
        bottom: 0;

        position: absolute;
    }


    @media screen and (max-width: 689px) {
        padding-bottom: 20px;
    }
`

export const S = {
    Achievement,
    AchievementItem,
    TitleAchievement,
    AchievementText
}