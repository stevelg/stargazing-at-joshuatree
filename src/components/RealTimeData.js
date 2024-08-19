import React, { useState, useEffect } from "react";

function RealTimeData({ data }) {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div>
      <div>{currentDate}</div>
    </div>
  );
}

export default RealTimeData;
