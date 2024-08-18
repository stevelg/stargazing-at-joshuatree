import React from "react";
import MoonPhase from "./components/MoonPhase";
import "./App.css";

function App() {
  // const [data, setData] = useState(null);
  const latitude = 33.9917;
  const longitude = -116.0628;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Best Time to See Stars in Joshua Tree National Park</h1>
      </header>
      <main>
        <MoonPhase latitude={latitude} longitude={longitude} />
      </main>
    </div>
  );
}

export default App;
