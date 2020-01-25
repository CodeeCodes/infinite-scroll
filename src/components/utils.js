const fetchData = fetch => {
  if (fetch) {
    axios
      .get(dataUrl)
      .then(response => {
        return !response.ok
          ? response.json().then(event => Promise.reject(event))
          : response.json();
      })
      .then(res => {
        props.setState([...props.state, response.message]);
      });
  }
};
