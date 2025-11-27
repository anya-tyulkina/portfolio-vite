import {SectionTitle} from "../../../SectionTitle.tsx";
import {Work} from "./work/Work.tsx";
import photoProject1 from "../../../../assets/images/proj-1.webp"
import photoProject2 from "../../../../assets/images/proj-4.webp"
import photoProject3 from "../../../../assets/images/proj-3.webp"
import {Container} from "../../../Container.tsx";
import {Button} from "../../../Button.tsx";
import {S} from "./Works_Styled.ts";
import * as React from "react";
import {TabMenu, TabMenuType} from "./TabMenu.tsx";
import {useState} from "react";
import {AnimatePresence, motion} from "motion/react"


const portfolio = [
    {
        id: 1,
        type: "spa",
        title: "SPA",
        src: photoProject1,
        text: "This is sample project description random things are here in description. his is sample project description random things are here in description. his is sample project description random things are here in description. his is sample project description random things are here in description. his is sample project description random things are here in description"
    },
    {
        id: 2,
        title: "React",
        type: "react",
        src: photoProject2,
        text: "This is sample project description random things are here in description"
    },
    {
        id: 3,
        title: "Redux",
        type: "redux",
        src: photoProject3,
        text: "This is sample project description random things are here in description"
    },
    {
        id: 4,
        title: "Redux",
        type: "redux",
        src: photoProject3,
        text: "This is sample project description random things are here in description"
    },
    {
        id: 5,
        title: "spa",
        type: "spa",
        src: photoProject3,
        text: "This is sample project description random things are here in description"
    },
    {
        id: 6,
        title: "react",
        type: "react",
        src: photoProject3,
        text: "This is sample project description random things are here in description"
    }
]
const tabItems: Array<{ title: string, status: TabMenuType }> = [
    {title: "all", status: "all"},
    {title: "react", status: "react"},
    {title: "redux", status: "redux"},
    {title: "spa", status: "spa"},
]

export const Works: React.FC = () => {
    const [currentTabStatus, setCurrentTabStatus] = useState("all");
    let filteredWorks = portfolio;

    switch (currentTabStatus) {
        case "react":
            filteredWorks = portfolio.filter((work) => work.type === "react");
            break;
        case "redux":
            filteredWorks = portfolio.filter((work) => work.type === "redux");
            break;
        case "spa":
            filteredWorks = portfolio.filter((work) => work.type === "spa");
            break;
    }

    function changeFilterStatus(value: TabMenuType) {
        setCurrentTabStatus(value)
    }

    return (
        <S.Works id={"portfolio"}>
            <Container>
                <SectionTitle $title={"portfolio"} subtitle={"Latest portfolio"}/>
                <TabMenu currentTabStatus={currentTabStatus} changeFilterStatus={changeFilterStatus}
                         tabItems={tabItems}/>
                <S.WrapperWorks>
                    <AnimatePresence>
                        {filteredWorks.map((item) => {
                            return (
                                <motion.div
                                    layout
                                    key={item.id}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                >
                                    <Work key={item.id} src={item.src} title={item.title}/>
                                </motion.div>

                            )
                        })
                        }
                    </AnimatePresence>
                    <Button width={"290px"} elemType='a' img={"arrow"} text={"view all portfolio"}/>
                </S.WrapperWorks>
            </Container>
        </S.Works>
    );
};

