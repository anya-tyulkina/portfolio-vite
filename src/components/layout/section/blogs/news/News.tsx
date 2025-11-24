import styled from "styled-components";
import {NewsListType} from "../BLogs.tsx";
import {theme} from "../../../../../style/Theme.tsx";

type NewsPropsType = {
    newsList: NewsListType
}

export const News = (props: NewsPropsType) => {
    return (
            <WrapperNews>
                {
                    props.newsList.map((news) => {
                        return (
                            <WrapperImage key={news.id}>
                                <ImageNews src={news.image}/>
                                <WrapperTitle>
                                    <TitleNews>{news.title}</TitleNews>
                                    <Separator>/</Separator>
                                    <TimeNews dateTime={news.time}>{news.time}</TimeNews>
                                    <TextNews>{news.text}</TextNews>
                                </WrapperTitle>
                            </WrapperImage>
                        )
                    })
                }
            </WrapperNews>
    )
};

const WrapperNews = styled.div`
    width: 100%;
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 30px;
    row-gap: 30px;

    place-content: center;
    
    padding: 60px 0 60px;
    
`


const WrapperImage = styled.article`
    
    position: relative;
    z-index: 0;

    &:hover {
        &::before {
            content: "";
            background-color: rgba(0, 0, 0, 0.3);
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            position: absolute;
            z-index: 1;
        }
    }

`


const WrapperTitle = styled.div`
    color: ${theme.colors.fontColor};
    width: 100%;

    position: absolute;
    z-index: 1;

    bottom: 0;
    padding: 50px;
    margin-right: 2px;

    background-image: linear-gradient(rgba(243, 243, 243, 0), rgba(46, 46, 46, 0.47));

`

const ImageNews = styled.img`
    width: 100%;
`

const TitleNews = styled.span`
    font-weight: 600;
`

const TimeNews = styled.time``

const TextNews = styled.h3`
    font-weight: 700;
    font-size: calc((100vw - 360px) / (1920 - 360) * (26 - 18) + 18px);
    text-transform: capitalize;
`

const Separator = styled.span`
    margin: 0 10px;
`