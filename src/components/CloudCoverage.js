import React, { useContext } from "react";
import DataContext from "./DataContext";
import rainImage from "../assets/cloud/rain.png";
import partlyImage from "../assets/cloud/partly.png";
import overcastImage from "../assets/cloud/overcast.png";
import mostlyClear from "../assets/cloud/clear.png";

function getAverageCloudCoverageFromSunsetTo23(data) {
  const day = data.days[0];
  const sunsetEpoch = day.sunsetEpoch;
  const endEpoch = day.datetimeEpoch + 23 * 3600; // 23:00 in seconds from the start of the day
  const hours = day.hours;

  // Filter hours between sunset and 23:00
  const filteredHours = hours.filter((hour) => hour.datetimeEpoch >= sunsetEpoch && hour.datetimeEpoch <= endEpoch);

  // Calculate average cloud coverage
  const totalCloudCoverage = filteredHours.reduce((sum, hour) => sum + hour.cloudcover, 0);
  const averageCloudCoverage = Math.floor(totalCloudCoverage / filteredHours.length);

  // Calculate average precipitation
  const totalPrecipitation = filteredHours.reduce((sum, hour) => sum + hour.precip, 0);
  const averagePrecipitation = totalPrecipitation / filteredHours.length;

  return { averageCloudCoverage, averagePrecipitation };
}

const getCloudCoverageImage = (cloudCoverage, precipitation) => {
  if (precipitation >= 50) return { image: rainImage, text: "Rainy" };
  if (cloudCoverage >= 70) return { image: overcastImage, text: "Overcast - " + cloudCoverage + "%" };
  if (cloudCoverage > 50 && cloudCoverage < 70) return { image: partlyImage, text: "Partly Cloudy - " + cloudCoverage + "%" };
  return { image: mostlyClear, text: "Mostly Clear - " + cloudCoverage + "%" };
};

const CloudCoverage = () => {
  const data = useContext(DataContext);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { averageCloudCoverage, averagePrecipitation } = getAverageCloudCoverageFromSunsetTo23(data);
  const { image, text } = getCloudCoverageImage(averageCloudCoverage, averagePrecipitation);

  return (
    <div className="cloud-coverage-img">
      {image && <img src={image} alt={text} />}
      <div className="cloud-coverage-text">{text}</div>
    </div>
  );
};

export default CloudCoverage;
