import React from 'react';
import styled, {css} from "styled-components";
import {font} from "../../../../common/font/font.tsx";
import {theme} from "../../../../style/Theme.tsx";

export type TabMenuType = "all" | "spa" | "react" | "redux";

type TabMenuPropsType = {
    tabItems: Array<{ title: string, status: TabMenuType}>
    changeFilterStatus: (value: TabMenuType) => void
    currentTabStatus: string
}

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {
                    props.tabItems.map((tabItem, index) => {
                        return (
                            <ListItem key={index}>
                                <Link active={props.currentTabStatus === tabItem.status} as={"button"} onClick={() => {
                                    props.changeFilterStatus(tabItem.status)
                                }}>{tabItem.title}</Link>
                            </ListItem>
                        )
                    })
                }
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`

    ul {
        padding: 50px;
        display: flex;
        gap: 50px;
        flex-wrap: wrap;
        justify-content: center;
        
        
        @media ${theme.media.tablet} {
            gap: 20px;
        }
    }

`

const ListItem = styled.li`

`
const Link = styled.a<{ active?: boolean }>`
    ${font({Fmax: 40, Fmin: 20})}
    padding-bottom: 10px;
    position: relative;
    z-index: 0;

    &:hover {
        transform: scale(1.1);
    }

    &:hover::before {
        height: 10px;
        bottom: 0;
    }

    &::before {
        content: "";
        display: inline-block;
        background-color: rgba(17, 17, 17, 0.63);
        bottom: 5px;
        left: 0;
        right: 0;

        position: absolute;
        z-index: -1;

        ${props => props.active && css<{ active?: boolean }>`
            height: 10px;
        `}
    }
`