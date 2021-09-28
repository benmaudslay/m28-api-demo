import React, { useState, useEffect } from "react"
import styled from "styled-components"
import "./App.css";

const App = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    handleFetch()
  }, [])

  useEffect(() => {
    console.log("you changed the data")
  }, [data])

  const handleFetch = async () => {
    let response = await fetch(
      "https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote"
    );
    let data = await response.json();
    setData(data)
  };


  return (
    <StyledWrapper force={data.faction === 0 ? "light" : "dark"}>
      <h1 className="title">Star Wars</h1>
      <p>{data.content}</p>
      <button onClick={handleFetch}>handleFetch</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.force === "dark" ? "black" : "white"};
  color: ${props => props.force === "light" ? "black" : "white"};

  &:hover {
    opacity: 0.8;
  }

  .title {
    margin: 10px;
    color: ${props => props.force === "light" ? "blue" : "red"};
  }

  .title:hover {
    transform: scale(1.5);

  }
`

export default App;
