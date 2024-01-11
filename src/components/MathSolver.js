import React, { useState, useEffect } from "react";
import { Input, Button } from "semantic-ui-react";
const axios = require("axios").default;

const MathSolver = () => {
  const [apiState, setApiState] = useState({
    resultsDisplayed: false,
    query: "",
    src: "",
  });

  const getAnswers = (query) => {
    // api key, simple api
    const apiKey = "WU5ELG-E63YVEXY3U";

    const url = `https://api.wolframalpha.com/v1/simple?appid=${apiKey}&i=${query}`;

    // Make a request for a user with a given ID
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log(response);
        setApiState({ ...apiState, src: response });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setApiState({ ...apiState, query: value });
  };

  return (
    <main>
      <Input
        value={apiState.query}
        onChange={handleChange}
        style={{ border: "5px solid white" }}
      />
      <Button basic color="teal" onClick={() => getAnswers(apiState.query)}>
        Solve
      </Button>

      {apiState.src.length > 0 && <img src={apiState.src} />}
    </main>
  );
};

export default MathSolver;
