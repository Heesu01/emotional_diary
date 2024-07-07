import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Editor from "../components/Editor";

const Home = () => {
  return (
    <div>
      <Header
        title={"Home"}
        leftChild={<Button type={"default"} text={"< 뒤로가기"} />}
        rightChild={<Button type={"negative"} text={"삭제하기"} />}
      />
      <Editor
        initData={{
          date: new Date().getTime(),
          emotionId: 1,
          content: "이전작성일기",
        }}
        onSubmit={() => {
          alert("작성완료");
        }}
      />
    </div>
  );
};

export default Home;
