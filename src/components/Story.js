import React, { useState } from "react";
import axios from "axios";
import {
  Input,
  Button,
  Message,
  MessageHeader,
  Image,
  Loader
} from "semantic-ui-react";
import foxImage from "@site/static/img/fox.png";

const baseUrl =
  "https://afternoon-brook-38206-2e9ac60b70aa.herokuapp.com/story";

const loader = (
  <div style={{"marginLeft": "100px", "marginTop": "20px"}}>
    <Loader active inline>
      Loading
    </Loader>
  </div>
);

const Story = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [contentState, setContentState] = useState({
    showContent: false,
    isLoading: false,
  });

  const handleChange = (e) => {
    const newPrompt = e.target.value;
    setPrompt(newPrompt);
  };

  const renderStory = (story) => {
    const storyParagraphs = story.split("\n").map((str) => (
      <p key={Math.random()}>
        <b>{str}</b>
      </p>
    ));
    return storyParagraphs;
  };

  const getStory = async (storyPrompt) => {
    const fullUrl = `${baseUrl}?prompt=${storyPrompt}`;
    try {
      setContentState({ ...contentState, isLoading: true });
      const results = await axios.get(fullUrl, { mode: "cors" });
      const storyResponse = results.data.story;
      setResponse(storyResponse);
      setContentState({ isLoading: false, showContent: true });
    } catch (error) {
      setContentState({...contentState, isLoading: false});
    }
  };

  return (
    <div>
      <Input
        value={prompt}
        onChange={handleChange}
        style={{ border: "5px solid white" }}
        placeholder="Enter a story prompt"
      />
      <Button basic color="teal" onClick={() => getStory(prompt)}>
        Write Story
      </Button>
      {contentState.isLoading && loader}
      {contentState.showContent && (
        <Message color="teal" floating>
          <MessageHeader>Your Story</MessageHeader>
          <MessageHeader>Prompt: "{prompt}"</MessageHeader>
          <Image src={foxImage} size="small" />
          {renderStory(response)}
        </Message>
      )}
    </div>
  );
};

export default Story;
