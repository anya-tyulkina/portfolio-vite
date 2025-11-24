import styled from "styled-components";
import {Icon} from "../../icon/Icon.tsx";
import {theme} from "../../../style/Theme.tsx";
import {Container} from "../../Container.tsx";

const idSocialList = ["telegram", "instagram", "facebook"];

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <SocialList>
                    {
                        idSocialList.map((item, index) => {
                            return (
                                <SocialItem key={index}>
                                    <SocialLink href={"#"}>
                                        <Icon width={"21px"} height={"21px"} viewBox={"0 0 30 30"}
                                              iconId={item}/>
                                    </SocialLink>
                                </SocialItem>
                            )
                        })
                    }
                </SocialList>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    height: 150px;
`

const SocialList = styled.ul`
    display: flex;
    gap: 66px;
    align-items: center;
    height: 100%;
    
    @media screen and (max-width: 1030px) {
        justify-content: center;
    }
`

const SocialItem = styled.li`
`
const SocialLink = styled.a`
`
