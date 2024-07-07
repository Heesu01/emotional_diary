import React from "react";
import { styled, css } from "styled-components";

const EmotionItem = ({ id, img, name, onClick, isSelected }) => {
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    // <div className={["EmotionItem", isSelected? `EmotionItem_on_${id}`: `EmotionItem_off`].join(" ")}></div>
    <Emotion isSelected={isSelected} id={id} onClick={handleOnClick}>
      <Img alt={`emotion${id}`} src={img} />
      <Span>{name}</Span>
    </Emotion>
  );
};

const Emotion = styled.div`
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ececec;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: ${(props) => {
        switch (props.id) {
          case 1:
            return "#64c964";
          case 2:
            return "#9dd772";
          case 3:
            return "#fdce17";
          case 4:
            return "#fd8446";
          case 5:
            return "#fd565f";
          default:
            return "#ececec";
        }
      }};
      color: white;
    `}
`;

const Img = styled.img`
  width: 50%;
  margin-bottom: 10px;
`;

const Span = styled.span`
  font-size: 18px;
`;
export default EmotionItem;
