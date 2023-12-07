import React, { useState } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImage from "../../../assets/images/proj-1.webp";
import timerImage from "../../../assets/images/proj-2.webp";
import { Container } from "../../../components/Container";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";
import { S } from "./Works_Styles";

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
  },
  {
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    src: timerImage,
    type: "React",
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
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus} />
        <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
          {filteredWorks.map((w, index) => {
            return <Work title={w.title} key={index} text={w.text} src={w.src} />;
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
