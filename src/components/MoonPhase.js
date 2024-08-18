import React, { useContext } from "react";
import DataContext from "./DataContext";

const MoonPhase = () => {
  const data = useContext(DataContext);

  if (!data) {
    return <div>Loading...</div>;
  }

  const moonPhase = data.days[0].moonphase; // Adjust according to your data structure

  return <div>Moon Phase: {moonPhase}</div>;
};

export default MoonPhase;
