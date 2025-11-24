// import styled, {css} from "styled-components";
// import {theme} from "../../../../style/Theme.tsx";
//
// const menu = ["home", "about", "Services", "Portfolio", "blogs", "Contact"]
//
// export const BurgerMenuHeader = () => {
//
//     return (
//         <StyledMenuMobile>
//             <BurgerButton isOpen={false}>
//                 <span></span>
//             </BurgerButton>
//             <MenuListPopup isOpen={false}>
//                 {menu.map((item, index) => {
//                     return <li key={index}>
//                         <a href="">{item}</a>
//                     </li>
//                 })}
//             </MenuListPopup>
//         </StyledMenuMobile>
//     );
// };
//
// const StyledMenuMobile = styled.nav`
//     display: none;
//
//     @media ${theme.media.tablet} {
//         display: block;
//     }
//
// `
// const MenuListPopup = styled.ul<{isOpen: boolean}>`
//
//     a {
//         font-family: "Rubik", sans-serif;
//         font-size: 30px;
//         letter-spacing: 0.08em;
//         color: #c5c5c5;
//         text-transform: uppercase;
//     }
//
//     ${props => props.isOpen && css<{ isOpen: boolean }>`
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         gap: 30px;
//     `}
//
//     position: fixed;
//     top: 0;
//     bottom: 0;
//     right: 0;
//     left: 0;
//     z-index: 2;
//
//     background-color: rgba(18, 17, 17, 0.9);
// `
//
// const BurgerButton = styled.button<{isOpen: boolean}>`
//     position: fixed;
//     z-index: 3;
//     width: 200px;
//     height: 200px;
//
//     top: -80px;
//     right: -80px;
//
//     span {
//         display: block;
//         background-color: ${theme.colors.fontColor};
//         width: 32px;
//         height: 4px;
//
//         position: absolute;
//         let: 40px;
//         bottom: 10px;
//
//         ${props => props.isOpen && css<{isOpen: boolean}>`
//             background-color: rgba(255, 255, 255, 0);
//         `}
//
//
//         &::before {
//             content: "";
//             display: block;
//             background-color: ${theme.colors.fontColor};
//             width: 27px;
//             height: 4px;
//
//             position: absolute;
//             transform: translateY(-10px);
//
//             ${props => props.isOpen && css<{isOpen: boolean}>`
//                 transform: rotate(45deg) translateY(0);
//             `}
//         }
//
//         &::after {
//             content: "";
//             display: block;
//             background-color: ${theme.colors.fontColor};
//             width: 27px;
//             height: 4px;
//
//             position: absolute;
//             transform: translateY(10px);
//
//             ${props => props.isOpen && css<{isOpen: boolean}>`
//                 transform: rotate(-45deg) translateY(0);
//             `}
//         }
//     }
// `