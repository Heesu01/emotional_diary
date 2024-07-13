import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { getEmotionImgById } from "../util";
import Button from "./Button";

const DiaryItem = ({ id, emotionId, content, date }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <Container>
      <ImgSection emotionId={emotionId} onClick={goDetail}>
        <img alt={`emotion${emotionId}`} src={getEmotionImgById(emotionId)} />
      </ImgSection>
      <Info onClick={goDetail}>
        <DateWrapper>
          {new Date(parseInt(date)).toLocaleDateString()}
        </DateWrapper>
        <ContentWrapper>{content.slice(0, 25)}</ContentWrapper>
      </Info>
      <ButtonWrapper>
        <Button on onClick={goEdit} text="수정하기" />
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 15px 0px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
`;

const ImgSection = styled.div.attrs((props) => ({
  className: `img_section_${props.emotionId}`,
}))`
  cursor: pointer;
  min-width: 120px;
  height: 80px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => {
    switch (props.emotionId) {
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

  img {
    width: 50%;
  }
`;
const Info = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  cursor: pointer;
`;
const DateWrapper = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 5px;
`;
const ContentWrapper = styled.div`
  font-size: 18px;
`;
const ButtonWrapper = styled.div`
  min-width: 70px;
`;
export default DiaryItem;
