import {SectionTitle} from "../../../SectionTitle.tsx";
import {Work} from "./work/Work.tsx";
import photoProject1 from "../../../../assets/images/proj-1.webp"
import photoProject2 from "../../../../assets/images/proj-4.webp"
import photoProject3 from "../../../../assets/images/proj-3.webp"
import {Container} from "../../../Container.tsx";
import {Button} from "../../../Button.tsx";
import {S} from "./Works_Styled.ts";
import * as React from "react";

const project = [
    {
        id: 1,
        title: "SPA",
        src: photoProject1,
        text: "This is sample project description random things are here in description. his is sample project description random things are here in description. his is sample project description random things are here in description. his is sample project description random things are here in description. his is sample project description random things are here in description"
    },
    {
        id: 2,
        title: "React",
        src: photoProject2,
        text: "This is sample project description random things are here in description"
    },
    {
        id: 3,
        title: "Redux",
        src: photoProject3,
        text: "This is sample project description random things are here in description"
    },
    {
        id: 4,
        title: "Redux",
        src: photoProject3,
        text: "This is sample project description random things are here in description"
    },
    {
        id: 5,
        title: "Redux",
        src: photoProject3,
        text: "This is sample project description random things are here in description"
    },
    {
        id: 6,
        title: "Redux",
        src: photoProject3,
        text: "This is sample project description random things are here in description"
    }
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                    <SectionTitle title={"portfolio"} subtitle={"Latest portfolio"}/>
                    <S.WrapperWorks>
                        {
                            project.map((item) => {
                                return (
                                    <Work key={item.id} src={item.src} title={item.title} />
                                )
                            })
                        }
                        <Button width={"290px"} elemType='a' img={"arrow"} text={"view all portfolio"}/>
                    </S.WrapperWorks>
            </Container>
        </S.Works>
    );
};

