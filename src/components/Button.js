import React from "react";
import styled, { css } from "styled-components";

const Button = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    <Btn btnType={btnType} onClick={onClick}>
      {text}
    </Btn>
  );
};

Button.defaultProps = {
  type: "default",
};

const Btn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px 20px 10px 20px;
  font-size: 18px;
  white-space: nowrap;
  font-family: "Nanum Pen Script";

  ${(props) =>
    props.btnType === "default" &&
    css`
      background-color: #ececec;
      color: black;
    `}

  ${(props) =>
    props.btnType === "positive" &&
    css`
      background-color: #64c964;
      color: white;
    `}
    ${(props) =>
    props.btnType === "negative" &&
    css`
      background-color: #fd565f;
      color: white;
    `}
`;
export default Button;
