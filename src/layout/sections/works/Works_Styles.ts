import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { Button } from "../../../components/Button";
import { Link } from "../../../components/Link";

// Works
const Works = styled.section`
  position: relative;
  ${FlexWrapper} {
    gap: 30px;
  }
  `;

// Work
// const Work = styled(motion.div)`
const Work = styled.div`
  background-color: ${theme.colors.secondaryBg};
  /* width: 330px;
  flex-grow: 1; */
  ${Link} {
    padding: 10px 0;
    /* margin-bottom: 10px; */

    & + ${Link} {
      margin-left: 20px;
    }
  }

  /* @media ${theme.media.desktop} {
    max-width: 540px;
  } */
`;

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    transition: ${theme.animations.transition};

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    opacity: 0;
    transition: ${theme.animations.transition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  @media ${theme.media.mobile} {
    &::before {
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Title = styled.h3``;

const Description = styled.div`
  padding: 25px 20px 15px;
  margin-bottom: 25px;
`;

const Text = styled.p`
  padding-top: 14px;
  margin-bottom: 10px;
`;

export const S = {
  Works,
  Work,
  ImageWrapper,
  Image,
  Title,
  Description,
  Text,
};
