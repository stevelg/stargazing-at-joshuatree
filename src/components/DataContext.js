import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const latitude = 33.9917; // coordnates change to be implemented
  const longitude = -116.0628;
  const apiKey = "9XRMNTJU2QEAXZ6GXE2LQY962";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?unitGroup=us&include=hours&key=${apiKey}&contentType=json`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContext;
