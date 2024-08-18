import React, { useState, useEffect } from "react";
import axios from "axios";

function MoonPhase({ latitude, longitude }) {
  const [moonPhase, setMoonPhase] = useState(null);

  useEffect(() => {
    const fetchMoonPhase = async () => {
      const appID = "e2bfbfc3-5e0e-47af-8af4-dd97f60ef66c";
      const appSecret =
        "c0fd3737da26b4070a84eac157bf5706bbdea8e230e405d6cbb6a8b45c0cefa40dc230bb5d1459440d33290c94cfa180e6e67ada82e43abd12c52660718edd99a83b6fba6a5e642e49bb956b3a062e4cbe4edbd306d7cfb41476f5607c23f57e623859b4332b0de1371f0cf1bc56d169";
      const authString = `Basic ${btoa(`${appID}:${appSecret}`)}`;
      const moonPhaseData = {
        style: {
          moonStyle: "default",
          backgroundStyle: "stars",
          backgroundColor: "#000000",
          headingColor: "#ffffff",
          textColor: "#ffffff",
        },
        observer: {
          latitude: latitude,
          longitude: longitude,
          date: new Date().toISOString().split("T")[0], // format "2024-08-17",
        },
        view: {
          type: "portrait-simple",
          parameters: {},
        },
      };

      try {
        const response = await axios.post("https://api.astronomyapi.com/api/v2/studio/moon-phase", moonPhaseData, {
          headers: {
            Authorization: authString,
          },
        });

        const imageUrl = response.data.data.imageUrl;
        setMoonPhase(imageUrl);
        console.log("Moon phase data:", imageUrl);
      } catch (error) {
        console.error("Error fetching moon phase data:", error);
      }
    };

    fetchMoonPhase();
  }, [latitude, longitude]);

  return (
    <div>
      <h2>Moon Phase</h2>
      {moonPhase ? <img src={moonPhase} alt="Moon Phase" style={{ maxWidth: "100%" }} /> : <p>Loading...</p>}
    </div>
  );
}

export default MoonPhase;
