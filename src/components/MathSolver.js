import React, { useState } from "react";
import axios from "axios";
import { Input, Button } from "semantic-ui-react";

const baseUrl = "https://afternoon-brook-38206-2e9ac60b70aa.herokuapp.com/math";

const MathSolver = () => {
  const [apiState, setApiState] = useState({
    resultsDisplayed: false,
    query: "",
    image: { exists: false, src: "" },
  });

  const getAnswers = async (query) => {
    const fullUrl = `${baseUrl}?expression=${query}`;
    
    try {
      const results = await axios.get(fullUrl);
      const data = results.data
      setApiState({ ...apiState, image: { exists: true, ...data } });
    } catch (error) {
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
      <br />
      <div>
        {apiState.image.exists && (
          <img
            src={apiState.image.src}
            width={apiState.image.width}
            height={apiState.image.height}
          />
        )}
      </div>
    </main>
  );
};

export default MathSolver;
