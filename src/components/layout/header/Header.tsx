import styled from "styled-components";
import {BurgerMenuHeader} from "./BurgerMenu/BurgerMenuHeader.tsx";
import {useState} from "react";
import * as React from "react";
import {theme} from "../../../style/Theme.tsx";

export const Header: React.FC = () => {
    const [$isOpen, setOpen] = useState(false);

    return (
        <StyledHeader $isOpen={$isOpen}>
                <BurgerMenuHeader $isOpen={$isOpen} setOpen={setOpen}/>
        </StyledHeader>

    )
}


const StyledHeader = styled.header<{ $isOpen: boolean }>`
    position: fixed;
    z-index: 10;

    width: 100%;
    height: 90px;

    background-color: ${props => props.$isOpen ? "rgba(18, 17, 17, 0)" : "rgba(5,5,5,0.67)"};
    transition: 0.3s ease-in-out;

    @media ${theme.media.desktop} {
        height: 60px;
    }
`

