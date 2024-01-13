import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";
import { WolframClient } from 'node-wolfram-alpha';

const client = new WolframClient('WU5ELG-E63YVEXY3U');



const MathSolver = () => {
  const [apiState, setApiState] = useState({
    resultsDisplayed: false,
    query: "",
    src: "",
  });

  const getAnswers = async (query) => {
    const result = await client.query(query, { podindex: 1 });
    console.info("result", result)
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
