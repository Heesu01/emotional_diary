import React from "react";
import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  return <div>{id}번째의 일기</div>;
};

export default Diary;
