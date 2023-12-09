import React, { useState } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImage from "../../../assets/images/proj-1.webp";
import timerImage from "../../../assets/images/proj-2.webp";
import { Container } from "../../../components/Container";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";
import { S } from "./Works_Styles";
import { motion, AnimatePresence } from "framer-motion";

// const tabsItems = ["All", "Landing page", "React", "Spa"];
const tabsItems: Array<{ title: string; status: TabsStatusType }> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "Landing page",
    status: "landing",
  },
  {
    title: "React",
    status: "React",
  },
  {
    title: "Spa",
    status: "Spa",
  },
];

const worksData = [
  {
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    src: socialImage,
    type: "Spa",
    id: 1,
  },
  {
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    src: timerImage,
    type: "React",
    id: 2,
  },
  {
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    src: socialImage,
    type: "Spa",
    id: 3,
  },
  {
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    src: timerImage,
    type: "React",
    id: 4,
  },
  {
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    src: socialImage,
    type: "Spa",
    id: 5,
  },
  {
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    src: timerImage,
    type: "React",
    id: 6,
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredWorks = worksData;

  if (currentFilterStatus === "landing") {
    filteredWorks = worksData.filter((work) => work.type === "landing");
  }
  if (currentFilterStatus === "Spa") {
    filteredWorks = worksData.filter((work) => work.type === "Spa");
  }
  if (currentFilterStatus === "React") {
    filteredWorks = worksData.filter((work) => work.type === "React");
  }

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works id={"works"}>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus} />
        <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
          <AnimatePresence>
            {filteredWorks.map((w, index) => {
              return (
                // prettier-ignore
                <motion.div style={{width:"400px", flexGrow: 1, maxWidth: "540px"}}
                  layout
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  key={w.id}
                >
                  <Work title={w.title} key={w.id} text={w.text} src={w.src} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
