import React from "react";

function RealTimeData({ data }) {
  return (
    <div>
      <h2>Current Moon Phase</h2>
      {data.moonPhaseImage && <img src={data.moonPhaseImage} alt="Moon Phase" />}
    </div>
  );
}

export default RealTimeData;
