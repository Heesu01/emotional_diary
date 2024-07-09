import React, { useEffect, useState } from "react";
import Button from "./Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("Latest");
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);

  const sortOptionList = [
    { value: "latest", name: "최신순" },
    { value: "oldest", name: "오래된 순" },
  ];
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const navigate = useNavigate();
  const onClickNew = () => {
    navigate("/new");
  };

  return (
    <List>
      <ManuWrapper>
        <Left>
          <select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </select>
        </Left>
        <Right>
          <Button type={"positive"} text="새 일기 쓰기" onClick={onClickNew} />
        </Right>
      </ManuWrapper>
    </List>
  );
};

const List = styled.div``;
const ManuWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  select {
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    background-color: #ececee;
    padding: 10px 20px;
    cursor: pointer;
    font-family: "Nanum Pen Script";
    font-size: 18px;
  }
`;
const Right = styled.div`
  flex-grow: 1;
  button {
    width: 100%;
  }
`;
export default DiaryList;
