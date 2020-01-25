import React, { useState, useEffect } from "react";
const fetchData = require("./utils").fetchData;

export default function InfiniteScroll(props) {
  const [loadData, setLoadData] = useState(true);

  //useEffect to fetch data when page is loaded and set the state
  //setting load more data to false
  useEffect(() => {
    fetchData(loadData);
    setLoadData(false);
  }, [loadData]);

  return <div className="infinite"></div>;
}
