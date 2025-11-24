import {Icon} from "../icon/Icon.tsx";
import * as React from "react";

export const Logo: React.FC = () => {
    return (
        <a href="/public">
            <Icon iconId={"logo"} width={"50px"} height={"50px"} />
        </a>
    );
};

