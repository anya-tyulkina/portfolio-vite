import styled from "styled-components";
import {SectionTitle} from "../../../SectionTitle.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";
import {Slider} from "../../../slider/Slider.tsx";
import {Container} from "../../../Container.tsx";
import bgImg from "../../../../assets/images/bgAchievement.jpg"
import {theme} from "../../../../style/Theme.tsx";
import arrow from "../../../../assets/images/arrowPagination.svg";
import imgAuthor from "../../../../assets/images/reviews.jpg";

const testimonyList = [
    {
        id: 1,
        text: "“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”",
        author: "Lucas wolfer",
        image: imgAuthor,
        position: "ceo - raisins"
    },
    // {
    //     id: 2,
    //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //     author: "Lucas wolfer",
    //     image: imgAuthor,
    //     branch: "ceo - raisins"
    // },
    // {
    //     id: 3,
    //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //     author: "Lucas wolfer",
    //     image: imgAuthor,
    //     branch: "ceo - raisins"
    // },
    // {
    //     id: 4,
    //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //     author: "Lucas wolfer",
    //     image: imgAuthor,
    //     branch: "ceo - raisins"
    // }
]

export type TestimonyListType = typeof testimonyList

export const Testimony = () => {
    return (
        <StyledTestimony>
            <WrapperTestimony>
                <Container>
                    <FlexWrapper direction="column" align={"center"} justify={"center"}>
                        <WrapperSlider>
                            <PaginationPrev/>
                            <SectionTitle borderColor={"#333333"} fontColorTitle={"#333333"}
                                          title={"testimonials"} fontColor={"#FFF"} bgColor={"#111111"}
                                          subtitle={"what clients says"}/>
                            <Slider testimonyList={testimonyList}/>
                            <PaginationNext/>
                            <PaginationMobile>
                                <span></span>
                                <span></span>
                                <span></span>
                            </PaginationMobile>
                        </WrapperSlider>
                    </FlexWrapper>
                </Container>
            </WrapperTestimony>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    color: ${theme.colors.fontColor};
`

const WrapperTestimony = styled.div`

    background-image: url(${bgImg});
    background-position: 100% 10%;
    background-size: cover;
    z-index: 0;
    position: relative;

    &::before {
        content: "";
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;

        z-index: -1;
        position: absolute;
    }

    //@media screen and (min-resolution: 2dppx) {
    //    background-image: url("/src/assets/images/bgImage.jpg");
    //    background-color: rgba(0, 0, 0, 0.41);
    //    background-position: 100% 10%;
    //}
`

const WrapperSlider = styled.div`
    padding: 30px 20px;

    position: relative;
    overflow: hidden;
    
    @media screen and (min-width: 768px) {
        padding: 80px 100px;
    }
`

const PaginationButton = styled.button`
    background-image: url("${arrow}");
    background-repeat: no-repeat;
    width: 25px;
    height: 50px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    
    @media ${theme.media.tablet} {
        display: none;
    }
`;

const PaginationPrev = styled(PaginationButton)`
    left: 5%;
    transform: translateY(-50%) rotate(180deg);

    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-50%) rotate(180deg) scale(1.3);
    }
`;

const PaginationNext = styled(PaginationButton)`
    right: 5%;

    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-50%) scale(1.3);
    }
`;

const PaginationMobile = styled.div`

    display: none;
    
    @media ${theme.media.tablet}{
        display: block;
    }

    width: fit-content;
    margin-top: 60px;

    span {
        display: inline-block;
        margin: 0 5px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: #fff;
    }

    span:nth-child(2) {
        background-color: #bc2323;
        border-radius: 30%;

        width: 20px;
        height: 7px;
    }
`
