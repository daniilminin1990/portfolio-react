import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Skills = styled.section`
  position: relative;
`;

const Skill = styled.div`
  width: 380px;
  flex-grow: 1;
  padding: 46px 20px 55px;

  @media ${theme.media.mobile} {
    width: auto;
    padding: 62px 0px 40px;
  }
`;

const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 80px;
    width: 80px;
    background-color: rgb(255, 255, 255, 0.1);
    transform: rotate(45deg) translate(-50%, -50%);

    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`;

const SkillTitle = styled.h3`
  margin: 65px 15px 15px;
  text-transform: uppercase;
`;
const SkillText = styled.p`
  text-align: center;
  line-height: 1.4;
`;

export const S = {
  Skills,
  Skill,
  IconWrapper,
  SkillTitle,
  SkillText,
};
