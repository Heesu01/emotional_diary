import React from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [SearchParams, setSearchParams] = useSearchParams();
  console.log(SearchParams.get("sort"));
  return <div></div>;
};

export default Home;
