import {Icon} from "../icon/Icon.tsx";
import * as React from "react";
import {animateScroll} from "react-scroll";
import styled from "styled-components";

export const Logo: React.FC = () => {
    return (
        <Link onClick={() => animateScroll.scrollToTop()}>
            <Icon iconId={"logo"} width={"180"} height={"30px"} viewBox={"0 0 220 30"}/>
        </Link>
    );
};


const Link = styled.a`
    cursor: pointer;
`