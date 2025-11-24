import styled from "styled-components";

type SectionTitlePropsType = {
    title?: string
    subtitle?: string
    bgColor?: string
    fontColor?: string
    fontColorTitle?: string
    borderColor?: string
    marginTop?: string
    alignTitle?: string

}

type StyledSectionTitlePropsType = Pick<SectionTitlePropsType, "alignTitle" | "marginTop">
type TextTitlePropsType = Pick<SectionTitlePropsType, "fontColorTitle">
type SubTitlePropsType = Pick<SectionTitlePropsType, "fontColor" | "bgColor" | "borderColor">

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <StyledSectionTitle alignTitle={props.alignTitle} marginTop={props.marginTop}>
            <TextTitle fontColorTitle={props.fontColorTitle}>{props.title}</TextTitle>
            <SubTitle borderColor={props.borderColor} fontColor={props.fontColor}
                      bgColor={props.bgColor}>{props.subtitle || ""}</SubTitle>
        </StyledSectionTitle>
    )
}

const StyledSectionTitle = styled.div<StyledSectionTitlePropsType>`
    text-align: ${props => props.alignTitle || "center"};
    position: relative;
    z-index: 0;
    margin-top: ${props => props.marginTop || "0"};
`

const TextTitle = styled.h2<TextTitlePropsType>`
    font-family: "Jost", sans-serif;
    font-size: calc((100vw - 360px) / (1920 - 360) * (120 - 50) + 50px);
    font-weight: 300;
    color: ${props => props.fontColorTitle || "#F8F8F8"};
    line-height: 150%;
    letter-spacing: -0.04em;
    text-transform: uppercase;
`

const SubTitle = styled.span<SubTitlePropsType>`
    font-family: "Inconsolata", monospace;
    font-size: calc((100vw - 360px) / (1920 - 360) * (20 - 10) + 10px);
    font-weight: 400;
    white-space: nowrap;
    line-height: 126%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${props => props.fontColor || "#111111"};
    background-color: ${props => props.bgColor || "#fff"};
    border: ${props => props.borderColor || "1px solid #F8F8F8"};

    display: inline-block;
    padding: 0 12px;

    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`