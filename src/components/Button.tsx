import styled from "styled-components";
import {Icon} from "./icon/Icon.tsx";
import {theme} from "../style/Theme.tsx";

type ButtonPropsType = {
    text?: string
    img?: string
    bgColor?: string
    color?: string
    elemType?: string
    width?: string
    height?: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <StyledButton width={props.width} height={props.height} as={props.elemType} bgColor={props.bgColor} color={props.color}>
            {props.text}
            {props.img &&
                <WrapperIcon>
                    <Icon iconId={props.img} height={"21"} width={"21"} viewBox={"0 0 30 30"}/>
                </WrapperIcon>
            }
        </StyledButton>
    )
}


const StyledButton = styled.button<ButtonPropsType>`

    font-family: "Manrope", monospace;
    font-weight: 600;
    background-color: ${props => props.bgColor || `${theme.colors.colorButtonBg}`};
    font-size: 17px;
    color: ${props => props.color || `${theme.colors.fontColor}`};
    border: 1px solid ${theme.colors.fontColor};
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    
    max-width: ${props => props.width || "200px"};
    min-height: ${props => props.height || "60px"};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    padding: 20px 40px;
    
    white-space: nowrap;



    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
`

const WrapperIcon = styled.div`
    display: flex;
    align-items: center;
`