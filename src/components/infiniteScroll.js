import React, { useState, useEffect } from "react";
import axios from "axios";

export default function InfiniteScroll() {
  const [loadData, setLoadData] = useState(true);
  const [state, setState] = useState([]);

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

  //fetching the data, randomizing the data in the response and selecting a random 100 subset
  const fetchData = fetch => {
    if (fetch) {
      axios
        .get("https://jsonplaceholder.typicode.com/photos/")
        .then(response => {
          const arrRan = response.data
            .sort(() => 0.5 - Math.random())
            .slice(0, 100);
          setState([...state, arrRan]);
        });
    }
  };

  //mapping through our state and outputting data
  const mappedImages =
    state[0] &&
    state[0].map((img, index) => (
      <div key={index} className="infinite__div">
        <h5>{img.title}</h5>
        <img src={img.thumbnailUrl} alt="random pics" />
      </div>
    ));

  return <div className="infinite">{mappedImages}</div>;
}
