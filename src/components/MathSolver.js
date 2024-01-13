import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";

const MathSolver = () => {
  const [apiState, setApiState] = useState({
    resultsDisplayed: false,
    query: "",
    src: "",
  });

  const getAnswers = (query) => {
    //
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
