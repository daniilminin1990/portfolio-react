import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImage from "../../../assets/images/proj-1.webp";
import timerImage from "../../../assets/images/proj-2.webp";
import { Container } from "../../../components/Container";
import { TabMenu } from "./tabMenu/TabMenu";

const worksItems = ["All", "Landing page", "React", "Spa"];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={worksItems} />
        <FlexWrapper justify={"space-between"} align={"flex-start"}>
          <Work
            title={"Social Network"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            }
            src={socialImage}
          />
          <Work
            title={"Timer"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
            }
            src={timerImage}
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section``;
