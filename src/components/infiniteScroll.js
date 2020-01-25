import React, { useState, useEffect } from "react";
import axios from "axios";

export default function InfiniteScroll() {
  const [loadData, setLoadData] = useState(true);
  const [state, setState] = useState([]);

  //useEffect to fetch data when page is loaded and set the state
  //setting load more data to false
  useEffect(() => {
    if (loadData === true) {
      fetchData(loadData);
      setLoadData(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.clientHeight
    ) {
      console.log("fetch more");
      fetchData();
    }
  }

  //fetching the data, randomizing the data in the response and selecting a random 100 subset
  const fetchData = () => {
    if (loadData) {
      axios
        .get("https://jsonplaceholder.typicode.com/photos/")
        .then(response => {
          const arrRan = response.data
            .sort(() => 0.5 - Math.random())
            .slice(0, 20);
          setState([...state, arrRan]);
        });
    }
  };
  console.log(loadData);
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
