import React from "react";
import styled, { css } from "styled-components";
import { emotionList } from "../util";

const Viewer = ({ content, emotionId }) => {
  const emotionItem = emotionList.find((it) => it.id === emotionId);
  // console.log(emotionItem);
  return (
    <View>
      <Section>
        <h4>오늘의 감정</h4>
        <ImgWrapper emotionId={emotionId}>
          <img alt={emotionItem.name} src={emotionItem.img} />
          <Descript>{emotionItem.name}</Descript>
        </ImgWrapper>
      </Section>
      <Section>
        <h4>오늘의일기</h4>
        <ContentWrapper>
          <p>{content}</p>
        </ContentWrapper>
      </Section>
    </View>
  );
};
const View = styled.div``;
const Section = styled.section`
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h4 {
    font-size: 22px;
    font-weight: bold;
  }
`;
const ImgWrapper = styled.div`
  background-color: #ececec;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  ${({ emotionId }) => {
    switch (emotionId) {
      case 1:
        return css`
          background-color: #64c964;
        `;
      case 2:
        return css`
          background-color: #9dd772;
        `;
      case 3:
        return css`
          background-color: #fdce17;
        `;
      case 4:
        return css`
          background-color: #fd8446;
        `;
      case 5:
        return css`
          background-color: #fd565f;
        `;

      default:
        return css`
          background-color: #ececec;
        `;
    }
  }}
`;
const Descript = styled.div`
  font-size: 25px;
  color: white;
`;
const ContentWrapper = styled.div`
  width: 100%;
  background-color: #ececec;
  border-radius: 5px;
  word-break: keep-all;
  overflow-wrap: break-word;

  p {
    padding: 20px;
    text-align: left;
    font-size: 20px;
    font-family: "Yeon Sung";
    font-weight: 400;
    line-height: 2.5;
  }
`;
export default Viewer;
