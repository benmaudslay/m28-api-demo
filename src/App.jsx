import React, { useState, useEffect } from "react"
import "./App.css";

// class App extends React.Component {
//   state = {
//     data: {}
//   }

//   handleFetch = async () => {
//     let response = await fetch(
//       "https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote"
//     );
//     let data = await response.json();
//     this.setState({ data: data })
//   }

//   componentDidMount() {
//     this.handleFetch()
//   }

//   componentDidUpdate() {
//     console.log("I just updated!")
//   }

//   render() {
//     const { data } = this.state
//     return (
//       <div>
//         <h1>Star Wars</h1>
//         <button onClick={this.handleFetch}>handleFetch</button>
//         <p>{data.content}</p>
//       </div>
//     )
//   }
// }

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
    <div>
      <h1>Star Wars</h1>
      <button onClick={handleFetch}>handleFetch</button>
      <p>{data.content}</p>
    </div>
  );
};

export default App;
