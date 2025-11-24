import styled from "styled-components";
import {BurgerMenuHeader} from "./BurgerMenu/BurgerMenuHeader.tsx";
import {useState} from "react";
import {Container} from "../../Container.tsx";
import * as React from "react";

export const Header: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <StyledHeader isOpen={isOpen}>
            <Container>
                <BurgerMenuHeader isOpen={isOpen} setOpen={setOpen}/>
            </Container>
        </StyledHeader>

    )
}


const StyledHeader = styled.header<{ isOpen: boolean }>`
    position: fixed;
    z-index: 1;

    width: 100vw;
    height: 90px;

    background-color: ${props => props.isOpen ? "rgba(18, 17, 17, 0)" : "rgba(5,5,5,0.67)"};
    transition: 0.3s ease-in-out;
`

