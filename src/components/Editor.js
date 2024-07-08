import { useState, useEffect } from "react";
import styled from "styled-components";
import { getFormattedDate, emotionList } from "../util";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import EmotionItem from "./EmotionItem";

const Editor = ({ initData, onSubmit }) => {
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
  });

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };

  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(state);
  };

  const navigate = useNavigate();
  const handleOnGoBack = () => {
    navigate(-1);
  };

  const handleChangeEmotion = (emotionId) => {
    setState({
      ...state,
      emotionId,
    });
  };

  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);

  return (
    <div>
      <EditorSection>
        <H4>오늘의 날짜</H4>
        <InputWrapper>
          <InputDate
            type="date"
            value={state.date}
            onChange={handleChangeDate}
          ></InputDate>
        </InputWrapper>
      </EditorSection>
      <EditorSection>
        <H4>오늘의 감정</H4>
        <EmotionWrapper>
          {emotionList.map((it) => (
            <EmotionItem
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === it.id}
            />
          ))}
        </EmotionWrapper>
      </EditorSection>
      <EditorSection>
        <H4>오늘의 일기</H4>
        <InputWrapper>
          <Text
            placeholder="오늘은 어땠나요?"
            value={state.content}
            onChange={handleChangeContent}
          />
        </InputWrapper>
      </EditorSection>
      <BottomSection>
        <Button text={"취소하기"} onClick={handleOnGoBack} />
        <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit} />
      </BottomSection>
    </div>
  );
};

const EditorSection = styled.div`
  margin-bottom: 40px;
`;
const BottomSection = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const H4 = styled.h4`
  font-size: 22px;
  font-weight: bold;
`;
const InputWrapper = styled.div`
  input,
  textarea {
    border: none;
    border-radius: 5px;
    background-color: #ececec;
    padding: 20px;
    font-size: 20px;
    font-family: "Nanum pen Script";
  }
`;
const EmotionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2%;
`;
const InputDate = styled.input`
  padding-top: 10px 0;
  cursor: pointer;
`;
const Text = styled.textarea`
  width: 100%;
  min-height: 200px;
  box-sizing: border-box;
  resize: vertical;
`;

export default Editor;
