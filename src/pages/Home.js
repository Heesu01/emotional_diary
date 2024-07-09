import React, { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import Button from "../components/Button";
import Header from "../components/Header";
import Editor from "../components/Editor";
import { getMonthRangeByDate } from "../util";
import DiaryList from "../components/DiaryList";

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [filterData, setFilterData] = useState([]);
  const [pivotDate, setPivotDate] = useState(new Date());
  const headerTitle = `${pivotDate.getFullYear()}년
  ${pivotDate.getMonth() + 1} 월`;

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilterData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFilterData([]);
    }
  }, [data, pivotDate]);

  return (
    <div>
      <Header
        title={headerTitle}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filterData} />
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
