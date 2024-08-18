import React, { useContext } from "react";
import DataContext from "./DataContext";

function getAverageCloudCoverageFromSunsetTo23(data) {
  const day = data.days[0]; // Assuming you want the first day
  const sunsetEpoch = day.sunsetEpoch;
  const endEpoch = day.datetimeEpoch + 23 * 3600; // 23:00 in seconds from the start of the day
  const hours = day.hours;

  // Filter hours between sunset and 23:00
  const filteredHours = hours.filter((hour) => hour.datetimeEpoch >= sunsetEpoch && hour.datetimeEpoch <= endEpoch);

  // Calculate average cloud coverage
  const totalCloudCoverage = filteredHours.reduce((sum, hour) => sum + hour.cloudcover, 0);
  const averageCloudCoverage = totalCloudCoverage / filteredHours.length;

  return averageCloudCoverage;
}

const CloudCoverage = () => {
  const data = useContext(DataContext);

  if (!data) {
    return <div>Loading...</div>;
  }

  const averageCloudCoverage = getAverageCloudCoverageFromSunsetTo23(data);
  return <div>Average Cloud Coverage at Night: {averageCloudCoverage}%</div>;
};

export default CloudCoverage;
