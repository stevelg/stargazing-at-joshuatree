import React from "react";
import MoonPhase from "./components/MoonPhase";
import { DataProvider } from "./components/DataContext";
import "./App.css";
import CloudCoverage from "./components/CloudCoverage";
import Visibility from "./components/Visibility";
import RealTimeData from "./components/RealTimeData";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <main>
          <div className="search-box">
            <input type="text" className="search-bar" placeholder="Enter location..." />
          </div>
          <div className="location-box">
            <div className="location">Joshua Tree National Park</div>
            <div className="date">
              <RealTimeData />
            </div>
          </div>
          <div className="visibility-box">
            <div className="visibility">
              <Visibility />
              <div className="visibility-unit">Stars Visibility</div>
            </div>
          </div>

          <div className="condition-container">
            <div className="moon-phase">
              <MoonPhase />
            </div>
            <div className="cloud-coverage">
              <CloudCoverage />
            </div>
          </div>
        </main>
      </div>
    </DataProvider>
  );
}

export default App;
