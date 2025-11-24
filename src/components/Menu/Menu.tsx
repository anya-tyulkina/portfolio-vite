import {S} from "./Menu_Styled.ts";

const menu = ["home", "about", "Services", "Portfolio", "blogs", "Contact"]

export const Menu = () => {

    return (
            <S.MenuList>
                {menu.map((item, index) => {
                    return <S.ManuItem key={index}>
                        <S.MenuLink href="">{item}</S.MenuLink>
                    </S.ManuItem>
                })}
            </S.MenuList>
    );
};