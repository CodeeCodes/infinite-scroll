import React, { useState } from "react";
import Infinity from "./components/infiniteScroll";
// const fetchData = require("./components/utils").fetchData;

function App() {
  const [state, setState] = useState([]);
  return (
    <div className="App">
      <Infinity state={state} setState={setState} />
    </div>
  );
}

export default App;
