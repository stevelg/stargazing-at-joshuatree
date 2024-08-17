import React, { useState, useEffect } from "react";
import CalendarView from "./components/CalendarView";
import RealTimeData from "./components/RealTimeData";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({
    moonPhase: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      // Joshua Tree National Park coordinates
      const longitude = 33.9917;
      const latitude = -116.0628;

      // astronomy api
      const appID = "e2bfbfc3-5e0e-47af-8af4-dd97f60ef66c";
      const appSecret =
        "c0fd3737da26b4070a84eac157bf5706bbdea8e230e405d6cbb6a8b45c0cefa40dc230bb5d1459440d33290c94cfa180e6e67ada82e43abd12c52660718edd99a83b6fba6a5e642e49bb956b3a062e4cbe4edbd306d7cfb41476f5607c23f57e623859b4332b0de1371f0cf1bc56d169";
      const authString = `Basic ${btoa(`${appID}:${appSecret}`)}`;
      const moonPhaseData = {
        style: {
          moonStyle: "default",
          backgroundStyle: "solid",
          backgroundColor: "#000000",
          headingColor: "#ffffff",
          textColor: "#ffffff",
        },
        observer: {
          latitude: longitude,
          longitude: latitude,
          date: new Date().toISOString().split("T")[0], // format "2024-08-17",
        },
        view: {
          type: "portrait-simple",
          parameters: {},
        },
      };
      const moonPhase = await axios.post("https://api.astronomyapi.com/api/v2/studio/moon-phase", moonPhaseData, {
        headers: {
          Authorization: authString,
        },
      });

      const moonPhaseImageUrl = moonPhase.data.data.imageUrl;
      console.log(moonPhaseImageUrl);
      setData({
        moonPhaseImage: moonPhaseImageUrl,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Best Time to See Stars in Joshua Tree National Park</h1>
      </header>
      <main>
        <RealTimeData data={data} />
        <CalendarView data={data} />
      </main>
    </div>
  );
}

export default App;
