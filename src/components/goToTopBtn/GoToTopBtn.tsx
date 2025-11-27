import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {theme} from "../../style/Theme.tsx";
import {animateScroll} from "react-scroll";

export const GoToTopBtn: React.FC = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })

        return () => {
            window.removeEventListener("scroll", () => {})
        }
    }, [])

    return (
        <>
            {showBtn &&
                <StyledGoToTopBtn onClick={() => animateScroll.scrollToTop()}>
                    <Icon height={"15px"} width={"16px"} viewBox={"0 0 16 15"} iconId={"arrow-go-to-top"}/>
                </StyledGoToTopBtn>
            }
        </>

    );
};

const StyledGoToTopBtn = styled.button`
    background-color: ${theme.colors.primaryBg};
    border-radius: 50%;
    overflow: hidden;
    padding: 20px;
    position: fixed;
    bottom: 30px;
    right: 30px;
`