import styled from "styled-components";

const menu = ["home", "about", "Services", "Portfolio", "blogs", "Contact"]

export const Menu = () => {

    return (
        <StyledMenu>
            <MenuList>
                {menu.map((item, index) => {
                    return <ManuItem key={index}>
                        <MenuLink href="">{item}</MenuLink>
                    </ManuItem>
                })}
            </MenuList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`

    @media screen and (max-width: 1180px) {
        grid-area: 3/1/4/3;
        
        ul {
            max-height: 100%;
            flex-direction: row;
        }
    }
`

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 40px;

    //width: 100%;
    max-height: 220px;
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