import styled from "styled-components";
import {TestimonyListType} from "../layout/section/testimony/Testimony.tsx";

type SliderPropsType = {
    testimonyList: TestimonyListType
}

export const Slider = (props: SliderPropsType) => {
    return (
        <StyledSlider>
            {
                props.testimonyList.map((items) => {
                    return (
                        <StyledSlide>
                            <Text>{items.text}</Text>
                            <Image src={items.image}/>
                            <Name>{items.author}</Name>
                            <Position>{items.position}</Position>
                        </StyledSlide>
                    )
                })
            }
        </StyledSlider>
    );
};

const StyledSlider = styled.ul`
    margin-top: 55px;

    position: relative;
`
const StyledSlide = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`

const Image = styled.img`
    max-width: 66px;
    max-height: 66px;
    width: 100%;
    height: 100%;
    
    border-radius: 100%;
    object-fit: cover;
    
    margin-top: 50px;
`

const Name = styled.span`
    font-size: 21px;
    line-height: 225%;
    letter-spacing: 0.02em;
    text-transform: capitalize;
`
const Position = styled.span`
    line-height: 178.5%;
    letter-spacing: 0.05em;
    font-size: 14px;
    text-transform: uppercase;
`

const Text = styled.p`
    max-width: 900px;
    width: 100%;

    font-size: calc((100vw - 360px) / (1920 - 360) * (28 - 18) + 18px);
    line-height: 183%;
    letter-spacing: 0.01em;
`