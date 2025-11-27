import {S} from "./Menu_Styled.ts";
import React from "react";

const menu = [
    {title: "home", href: "home"},
    {title: "about", href: "about"},
    {title: "Services", href: "services"},
    {title: "Portfolio", href: "portfolio"},
    {title: "blogs", href: "blogs"},
    {title: "Contact", href: "contact"},
]

type MenuProps = {
    setOpen?: (isOpen: boolean) => void
}

export const Menu: React.FC<MenuProps> = ({setOpen}) => {

    const handleLinkClick = () => {
        setTimeout(()=> {
            if (setOpen) {
                setOpen(false);
            }
        }, 300)
    };

    return (
        <S.MenuList>
            {menu.map((item, index) => {
                return <S.ManuItem key={index}>
                    <S.MenuLink to={item.href}
                                smooth={true}
                                spy={true}
                                onClick={handleLinkClick}
                    >{item.title}</S.MenuLink>
                </S.ManuItem>
            })}
        </S.MenuList>
    );
};