
const fetchData = fetch => {
  if (fetch) {
    axios
      .get("https://source.unsplash.com/random")
      .then(response => {
        return !response.ok
          ? response.json().then(event => Promise.reject(event))
          : response.json();
      })
      .then(response => {
        props.setState([...props.state, response.message]);
      });
  }
};
