import React, { useState } from "react";
import { Icon, Input } from "semantic-ui-react";

export default function YelpSearch(props) {
  const state = {
    input: "",
  };

  const [input, setInput] = useState(state.input);

  const handleClick = (e) => {
    e.preventDefault();
    props.getParking(input);
    setInput("");
  };

  return (
    <Input
      icon={<Icon name="search" inverted circular link onClick={handleClick} />}
      placeholder="Search location..."
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
      }}
    />
  );
}
