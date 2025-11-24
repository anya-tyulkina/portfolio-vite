import {Container} from "../../../Container.tsx";
import {SectionTitle} from "../../../SectionTitle.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";
import * as React from "react";
import {S} from "./Achievement_Styled.ts";

const achievementList = [
    {id: 1, title: "Interior design", text: "Breakthrough designer of the year 2020"},
    {id: 2, title: "Interior design", text: "Breakthrough designer of the year 2020"},
    {id: 3, title: "Interior design", text: "Breakthrough designer of the year 2020"},
    {id: 4, title: "Interior design", text: "Breakthrough designer of the year 2020"},
    {id: 5, title: "Interior design", text: "Breakthrough designer of the year 2020"},
    {id: 6, title: "Interior design", text: "Breakthrough designer of the year 2020"}
]

export const Achievement: React.FC = () => {
    return (
        <S.Achievement>
            <Container>
                <SectionTitle title={"achievement"} subtitle={"awards and recognition"}/>
                <FlexWrapper justify={"space-between"} gap={"60px"} wrap={"wrap"}>
                        {
                            achievementList.map((achievement) => {
                                return (
                                    <S.AchievementItem key={achievement.id}>
                                        <S.TitleAchievement>{achievement.title}</S.TitleAchievement>
                                        <S.AchievementText>{achievement.text}</S.AchievementText>
                                    </S.AchievementItem>
                                )
                            })
                        }
                </FlexWrapper>
            </Container>
        </S.Achievement>
    );
};