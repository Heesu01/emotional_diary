import React from "react";
import styled from "styled-components";

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <HeaderDiv>
      <Left>{leftChild}</Left>
      <Title>{title}</Title>
      <Right>{rightChild}</Right>
    </HeaderDiv>
  );
};
const HeaderDiv = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  div {
    display: flex;
  }
  button {
    font-family: "Nanum Pen Script";
  }
`;
const Left = styled.div`
  width: 25%;
  justify-content: start;
`;
const Title = styled.div`
  width: 50%;
  font-size: 25px;
  justify-content: center;
`;
const Right = styled.div`
  width: 25%;
  justify-content: end;
`;
export default Header;
