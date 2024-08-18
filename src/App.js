import React from "react";
import MoonPhase from "./components/MoonPhase";
import { DataProvider } from "./components/DataContext";
import "./App.css";
import CloudCoverage from "./components/CloudCoverage";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <header className="App-header">
          <h1>Best Time to See Stars in Joshua Tree National Park</h1>
        </header>
        <main>
          <MoonPhase />
          <CloudCoverage />
        </main>
      </div>
    </DataProvider>
  );
}

export default App;
