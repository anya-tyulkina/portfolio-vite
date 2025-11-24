import styled from "styled-components";

type SlidePropsType = {
    text?: string
    image?: string
    author?: string
    position?: string
}

export const Slide = (props: SlidePropsType) => {
    return (
        <StyledSlide>
            <Text>{props.text}</Text>
            <WrapperImage>
                <Image src={props.image}/>
            </WrapperImage>
            <Name>{props.author}{"\n"}</Name>
            <Position>{props.position}</Position>
        </StyledSlide>
    );
};


const StyledSlide = styled.div`
    margin: 0 122px 145px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100%;

    object-fit: cover;
`

const Name = styled.span`
    white-space: pre-wrap;

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

    font-size: 28px;
    line-height: 183%;
    letter-spacing: 0.01em;
`

const WrapperImage = styled.div`
    width: 66px;
    height: 66px;

    margin: 50px 10px 0;
`