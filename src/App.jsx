import { useState } from "react"
import "./App.css";

const App = () => {
  const [data, setData] = useState({})

  const handleFetch = async () => {
    let response = await fetch(
      "https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote"
    );
    let data = await response.json();
    setData(data)
  };

  return (
    <div>
      <h1>Star Wars</h1>
      <button onClick={handleFetch}>handleFetch</button>
      <p>{data.content}</p>
    </div>
  );
};

export default App;
