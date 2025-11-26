import styled from "styled-components";
import {font} from "../../common/font/font.tsx";

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 40px;

    max-height: 220px;
`

const ManuItem = styled.li`
    width: fit-content;
`

const MenuLink = styled.a`
    
    ${font({color: "#8F8F8F", letterSpacing: 0.08, family: "'Rubik', sans-serif"})}
    text-transform: uppercase;
    
    &:hover {
        color: #201F1F;
    }
`

export const S = {
    MenuList,
    ManuItem,
    MenuLink
}