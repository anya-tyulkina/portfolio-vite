import styled from "styled-components";
import {font} from "../common/font/font.tsx";
import {theme} from "../style/Theme.tsx";

type SectionTitlePropsType = {
    $title?: string
    subtitle?: string
    $bgColor?: string
    $fontColor?: string
    $fontColorTitle?: string
    $borderColor?: string
    $marginTop?: string
    $alignTitle?: string

}

type StyledSectionTitlePropsType = Pick<SectionTitlePropsType, "$alignTitle" | "$marginTop">
type TextTitlePropsType = Pick<SectionTitlePropsType, "$fontColorTitle">
type SubTitlePropsType = Pick<SectionTitlePropsType, "$fontColor" | "$bgColor" | "$borderColor">

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <StyledSectionTitle $alignTitle={props.$alignTitle} $marginTop={props.$marginTop}>
            <TextTitle $fontColorTitle={props.$fontColorTitle}>
                {props.$title}
                <SubTitle $borderColor={props.$borderColor} $fontColor={props.$fontColor}
                          $bgColor={props.$bgColor}>{props.subtitle || ""}</SubTitle>
            </TextTitle>

        </StyledSectionTitle>
    )
}

const StyledSectionTitle = styled.div<StyledSectionTitlePropsType>`
    text-align: ${props => props.$alignTitle || "center"};
    margin-top: ${props => props.$marginTop || "0"};
`

const TextTitle = styled.h2<TextTitlePropsType>`
    position: relative;
    z-index: 0;
    
    color: ${props => props.$fontColorTitle || "#F8F8F8"};

    ${font({family: "'Jost', sans-serif", Fmax: 120, Fmin: 50, weight: 300, lineHeight: 1.5, letterSpacing: -0.04})}
    text-transform: uppercase;
`

const SubTitle = styled.span<SubTitlePropsType>`
    ${font({family: "'Inconsolata', monospace", Fmax: 20, Fmin: 10, lineHeight: 1.26, letterSpacing: 0.1})}
    white-space: nowrap;
    text-transform: uppercase;
    color: ${props => props.$fontColor || "#111111"};

    background-color: ${props => props.$bgColor || `${theme.colors.fontColor}`};
    border: ${props => props.$borderColor || "1px solid #F8F8F8"};

    display: inline-block;
    padding: 0 12px;

    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`