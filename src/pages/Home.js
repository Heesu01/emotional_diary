import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header
        title={"Home"}
        leftChild={<Button type={"default"} text={"< 뒤로가기"} />}
        rightChild={<Button type={"negative"} text={"삭제하기"} />}
      />
    </div>
  );
};

export default Home;
