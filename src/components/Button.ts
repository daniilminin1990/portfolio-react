import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  height: 32px;
  width: 170px;
  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      height: 100%;
      width: 100%;
    }
  }

  &::before {
    content: "";
    display: inline-block;
    height: 10px;
    width: 50%;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: -1;
    transform: translateX(-50%);
    transition: 0.2s;
  }
`;
