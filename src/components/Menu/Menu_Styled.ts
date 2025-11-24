import styled from "styled-components";

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 40px;

    max-height: 220px;

    @media screen and (max-width: 1080px) {
        max-height: 100px;
        width: 100%;
        align-items: center;
    }

    @media screen and (max-width: 1080px) {
        grid-area: 3/1/3/3;
    }
`

const ManuItem = styled.li`
    width: fit-content;
`

const MenuLink = styled.a`
    font-family: "Rubik", sans-serif;
    letter-spacing: 0.08em;
    color: #8F8F8F;
    
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