import styled from "styled-components";
import {Container} from "../../../Container.tsx";
import {Button} from "../../../Button.tsx";
import {Menu} from "../../../Menu/Menu.tsx";
import {theme} from "../../../../style/Theme.tsx";
import * as React from "react";

export const Contacts: React.FC = () => {
    return (
        <StyledContacts>
            <Container>
                <GridWrapperContacts>
                    <Subscribe>
                        <TextSubscribe>Subscribe to newsletter to get some updates related with branding, designs and
                            more.</TextSubscribe>
                        <FormSubscribe>
                            <Field placeholder={"write your email address"}/>
                            <Button height={"40px"} width={"350px"} elemType={"a"} text={"subscribe it"} color={"#fff"}
                                    bgColor={"#000"}/>
                        </FormSubscribe>
                    </Subscribe>
                    <Menu/>
                    <LinkContacts>
                        <TextContact>Just feel free to contact if you wanna collaborate with me, or simply have a
                            conversation.</TextContact>
                        <Email>templatesjungle@gmail.com</Email>
                    </LinkContacts>
                </GridWrapperContacts>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`

    padding: 160px 0 100px;
    font-size: 17px;

    & p {
        color: #494949;
        line-height: 225%;
        letter-spacing: 0.02em;
    }
`

const Subscribe = styled.div`
    
    
`

const GridWrapperContacts = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    column-gap: 50px;
    row-gap: 60px;

    @media screen and (max-width: 1180px) {
        grid-template-columns: 1fr;
        justify-items: center;
        column-gap: 0;
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

    @media screen and (max-width: 1180px) {
        grid-area: 2/1/3/3;
    }
 

`

const TextContact = styled.p`
    margin-bottom: 30px;

    @media screen and (max-width: 1180px) {
        margin-bottom: 10px;
    }
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
