import { css } from "@emotion/react";
import styled from "@emotion/styled";

export default styled.button`
  padding: 8px;
  border-radius: 4px;
  outline: none;
  transition: all 0.15s linear 0s;
  cursor: pointer;

  //default
  background-color: white;
  border: 1px solid rgb(233, 233, 233);
  color: black;

  // primary
  ${(props) =>
    props.variant === "primary" &&
    css`
      background-color: rgb(36, 139, 210);
      border-color: rgb(36, 139, 210);
      color: white;
    `}

  // primary
  ${(props) =>
    props.variant === "danger" &&
    css`
      background-color: rgb(212, 94, 94);
      border-color: rgb(212, 94, 94);
      color: white;
    `}

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  &:focus {
    box-shadow: rgb(167 209 237) 0px 0px 1px 2px;
  }
`;
