import React, { useState } from "react";
import axios from "axios";
import { Input, Button } from "semantic-ui-react";

const baseUrl = "https://afternoon-brook-38206-2e9ac60b70aa.herokuapp.com/math";

const MathSolver = () => {
  const [apiState, setApiState] = useState({
    resultsDisplayed: false,
    query: "",
    src: "",
  });

  const getAnswers = async (query) => {
    const fullUrl = `${baseUrl}?expression=${query}`;
    let results;
    try {
      results = await axios.get(fullUrl);
      console.info("results", results)
      setApiState({ ...apiState, src: results });
    } catch (error) {
      results = error;
      console.info("error", error)
    }
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
