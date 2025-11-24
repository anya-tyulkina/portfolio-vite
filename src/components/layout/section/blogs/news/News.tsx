import {NewsListType} from "../BLogs.tsx";
import {S} from "../Blogs_Styled.ts";
import * as React from "react";

type NewsPropsType = {
    newsList: NewsListType
}

export const News: React.FC<NewsPropsType> = (props: NewsPropsType) => {
    return (
            <S.WrapperNews>
                {
                    props.newsList.map((news) => {
                        return (
                            <S.WrapperImage key={news.id}>
                                <S.ImageNews src={news.image}/>
                                <S.WrapperTitle>
                                    <S.TitleNews>{news.title}</S.TitleNews>
                                    <S.Separator>/</S.Separator>
                                    <S.TimeNews dateTime={news.time}>{news.time}</S.TimeNews>
                                    <S.TextNews>{news.text}</S.TextNews>
                                </S.WrapperTitle>
                            </S.WrapperImage>
                        )
                    })
                }
            </S.WrapperNews>
    )
};