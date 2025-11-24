import styled from "styled-components";
import {theme} from "../../../../style/Theme.tsx";


const Contacts = styled.section`

    padding: 160px 0 100px;
    font-size: 17px;

    & p {
        color: #494949;
        line-height: 225%;
        letter-spacing: 0.02em;
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
    }

    @media screen and (max-width: 1080px) {
        ul {
            grid-area: 3/1/3/3;
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

    &::placeholder {
        font-family: "Manrope";
        font-weight: 400;
        font-size: 17px;
        letter-spacing: 0.02em;
        text-transform: capitalize;
        padding-left: 24px;
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
    font-size: calc((100vw - 360px) / (1920 - 360) * (30 - 20) + 20px);
    font-weight: 200;
    line-height: 183%;
    letter-spacing: 0.01em;
    color: ${theme.colors.fontColorSecondary};
    padding-bottom: 5px;
    
    width: 100%;

    position: relative;

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
