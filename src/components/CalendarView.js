import React from "react";

const CalendarView = ({ data }) => {
  return (
    <div>
      <h2>Moon Phase Calendar</h2>
      {data.moonPhaseImage && <img src={data.moonPhaseImage} alt="Moon Phase" />}
    </div>
  );
};

export default CalendarView;
