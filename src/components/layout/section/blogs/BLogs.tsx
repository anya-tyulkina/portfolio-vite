import styled from "styled-components";
import {Container} from "../../../Container.tsx";
import {SectionTitle} from "../../../SectionTitle.tsx";
import photoNews1 from "../../../../assets/images/news-1.png";
import photoNews2 from "../../../../assets/images/news-2.png";
import photoNews3 from "../../../../assets/images/news-3.png";
import {Button} from "../../../Button.tsx";
import {News} from "./news/News.tsx";


const newsList = [
    {
        id: 1,
        title: "Graphic Design ",
        time: "July 1, 2021",
        text: "Graphic Designing Useful Tips & Best Practices",
        image: photoNews1
    },
    {
        id: 2,
        title: "Graphic Design ",
        time: "July 1, 2021",
        text: "basic typography rules for ui designing",
        image: photoNews2
    },
    {
        id: 3,
        title: "Graphic Design ",
        time: "July 1, 2021",
        text: "top 10 graphic designs review in 2021",
        image: photoNews3
    },
];

export type NewsListType = typeof newsList;

export const BLogs = () => {

    return (
        <StyledBLogs>
            <Container>
                    <SectionTitle title={"blogs"} subtitle={"latest news"}/>
                    <News newsList={newsList}/>
                    <Button elemType={"a"} img={"arrow-black"} bgColor={"none"} text={"view all blogs"} color={"#111"}/>
                </Container>
        </StyledBLogs>
    );
};

const StyledBLogs = styled.section`
    padding-bottom: 200px;
    
    & a {
        margin: 0 auto;
    }
`

