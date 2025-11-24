import {S} from "../Works_Styled.ts";
import * as React from "react";

type WorkPropsType = {
    title: string
    src: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {

    return (
        <S.WorkWrapper>
                <S.Work>
                    <S.Image src={props.src}/>
                    <S.Title>{props.title}</S.Title>
                </S.Work>
        </S.WorkWrapper>
    )
};