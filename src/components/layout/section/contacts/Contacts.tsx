import {Container} from "../../../Container.tsx";
import {Button} from "../../../Button.tsx";
import {S} from "./Contacts_Styled.ts"
import * as React from "react";
import {Menu} from "../../../Menu/Menu.tsx";

export const Contacts: React.FC = () => {
    return (
        <S.Contacts>
            <Container>
                <S.GridWrapperContacts>
                    <S.Subscribe>
                        <S.TextSubscribe>Subscribe to newsletter to get some updates related with branding, designs and
                            more.</S.TextSubscribe>
                        <S.FormSubscribe>
                            <S.Field placeholder={"write your email address"}/>
                            <Button height={"40px"} width={"350px"} elemType={"a"} text={"subscribe it"} color={"#fff"}
                                    bgColor={"#000"}/>
                        </S.FormSubscribe>
                    </S.Subscribe>
                    <Menu/>
                    <S.LinkContacts>
                        <S.TextContact>Just feel free to contact if you wanna collaborate with me, or simply have a
                            conversation.</S.TextContact>
                        <S.Email href="mailto:anya.tyulkina@mail.ru">anya.tyulkina@mail.ru</S.Email>
                    </S.LinkContacts>
                </S.GridWrapperContacts>
            </Container>
        </S.Contacts>
    );
};