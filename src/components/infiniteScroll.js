import React, { useState, useEffect } from "react";
import axios from "axios";

export default function InfiniteScroll(props) {
  const [loadData, setLoadData] = useState(true);

  //useEffect to fetch data when page is loaded and set the state
  //setting load more data to false
  useEffect(() => {
    fetchData(loadData);
    setLoadData(false);
  }, []);

  //setting element to variable, then checking where it is on the window
  useEffect(() => {
    const imageDiv = document.querySelector(".infinite");
    if (imageDiv.clientHeight <= window.innerHeight && imageDiv.clientHeight) {
      setLoadData(true);
    }
  }, []);

  const fetchData = fetch => {
    if (fetch) {
      axios
        .get("https://jsonplaceholder.typicode.com/photos/600")
        .then(response => {
          props.setState([...props.state, response.data]);
        });
    }
  };
  console.log(props.state);

  const images =
    props.state &&
    props.state.map((img, index) => <img src={img.url} key={index} />);

  return <div className="infinite">{images}</div>;
}
