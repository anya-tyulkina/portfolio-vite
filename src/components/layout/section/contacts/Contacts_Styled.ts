import styled from "styled-components";
import {theme} from "../../../../style/Theme.tsx";
import {font} from "../../../../common/font/font.tsx";


const Contacts = styled.section`
    padding: 160px 0 100px;

    & p {
        ${font({color: "#494949", lineHeight: 2.25, letterSpacing: 0.02})}
    }
    
    @media ${theme.media.desktop} {
        padding: 50px 0 50px;
    }
`
const GridWrapperContacts = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 50px;
    row-gap: 60px;

    @media screen and (max-width: 1080px) {
        grid-template-columns: 1fr;
        column-gap: 0;
        
        ul {
            grid-area: 3/1/3/3;
            max-height: 100px;
            width: 100%;
            align-items: center;
        }

        @media screen and (max-width: 576px) {
            ul {
                max-height: 100%;
                align-items: flex-start;
            }
        }
`

const Subscribe = styled.div`
    max-width: 300px;
    width: 100%;

    @media screen and (max-width: 1080px) {
        max-width: 100%;
    }
`

const TextSubscribe = styled.p`
`

const FormSubscribe = styled.form`
    width: 100%;
`

const Field = styled.input`
    min-height: 50px;
    max-width: 350px;
    margin: 40px 0 14px;
    padding-left: 24px;

    ${font({letterSpacing: 0.02, Fmax: 17, Fmin: 14})}

    &::placeholder {
        text-transform: capitalize;
    }
`

const LinkContacts = styled.div`
    max-width: 400px;
    width: 100%;

    @media screen and (max-width: 1080px) {
        max-width: 100%;
        grid-area: 2/1/3/3;
    }
`

const TextContact = styled.p`
    margin-bottom: 30px;
`

const Email = styled.a`
    ${font({Fmax: 30, Fmin: 20, weight: 200, lineHeight: 1.8, letterSpacing: 0.01, color: `${theme.colors.fontColorSecondary}`})}
    
    padding-bottom: 5px;

    width: fit-content;
    display: inline-block;
    position: relative;
    
    transition: ${theme.animation.transition};
    &:hover {
        transform: scale(1.1);
    }

    &::before {
        content: "";
        display: inline-block;
        background-color: ${theme.colors.fontColorSecondary};
        width: 100%;
        height: 2px;

        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
    }
`


export const S = {
    Contacts,
    Subscribe,
    TextContact,
    Field,
    Email,
    LinkContacts,
    FormSubscribe,
    TextSubscribe,
    GridWrapperContacts
}
