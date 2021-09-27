import './App.css';

const App = () => {
  const handleFetch = () => {
    console.log("hiya")
  }

  return (
    <div>
      <h1>Star Wars</h1>
      <button onClick={handleFetch}>handleFetch</button>
    </div>
  )
}

export default App;
