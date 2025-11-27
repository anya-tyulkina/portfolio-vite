import styled, {css} from "styled-components";
import {theme} from "../../../../style/Theme.tsx";
import {Menu} from "../../../Menu/Menu.tsx";
import * as React from "react";
import {Logo} from "../../../logo/Logo.tsx";

type BurgerMenuHeaderPropsType = {
    $isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

export const BurgerMenuHeader: React.FC<BurgerMenuHeaderPropsType> = ({
                                                                          $isOpen,
                                                                          setOpen
                                                                      }: BurgerMenuHeaderPropsType) => {

    return (
        <StyledBurgerMenuHeader>
            <Logo/>
            <BurgerButton onClick={() => setOpen(!$isOpen)} $isOpen={$isOpen}>
                <span></span>
            </BurgerButton>
            <MenuListPopup $isOpen={$isOpen} onClick={() => setOpen(false)}>
                <Menu setOpen={setOpen}/>
            </MenuListPopup>
        </StyledBurgerMenuHeader>
    );
};

const StyledBurgerMenuHeader = styled.nav`
    svg {
        position: fixed;
        z-index: 4;
        top: 30px;
        left: 15px;
    }

    @media ${theme.media.desktop} {
        svg {
            top: 20px;

            width: 100px;
            height: 20px;
        }
    }
`

const MenuListPopup = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 3;

    background-color: rgba(18, 17, 17, 0.9);

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: ${props => (props.$isOpen ? 1 : 0)};
    visibility: ${props => (props.$isOpen ? "visible" : "hidden")};
    transition: 0.3s ease;

    a {
        font-size: 30px;
        color: #c5c5c5;

        &:hover {
            color: #514f4f;
        }
    }

    ul {
        display: flex;
        gap: 60px;
        align-items: center;
        max-height: 100%;
        width: fit-content;
    }
    
    ul > li {
        padding: 10px;
    }
`

const BurgerButton = styled.button<{ $isOpen: boolean }>`
    position: fixed;
    z-index: 5;
    width: 40px;
    height: 30px;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60px;
        height: 60px;
    }

    top: 30px;
    right: 50px;

    @media ${theme.media.desktop} {
        top: 10px;
        right: 5px;
    }

    span {
        display: block;
        background-color: ${theme.colors.fontColor};
        width: 32px;
        height: 4px;
        position: absolute;

        ${props => props.$isOpen && css<{ $isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `} @media ${theme.media.desktop} {
        width: 25px;
        height: 2px;
    }


        &::before {
            content: "";
            display: block;
            background-color: ${theme.colors.fontColor};
            width: 27px;
            height: 4px;

            position: absolute;
            transform: translateY(-10px);

            ${props => props.$isOpen && css<{ $isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);`} @media ${theme.media.desktop} {
            width: 20px;
            height: 2px;
        }
        }

        &::after {
            content: "";
            display: block;
            background-color: ${theme.colors.fontColor};
            width: 27px;
            height: 4px;

            position: absolute;
            transform: translateY(10px);

            ${props => props.$isOpen && css<{ $isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `} @media ${theme.media.desktop} {
            width: 20px;
            height: 2px;
        }
        }

    }


`