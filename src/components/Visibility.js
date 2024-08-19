import React, { useContext } from "react";
import DataContext from "./DataContext";

const calculateVisibilityPercentage = (moonlightPercentage, cloudCoveragePercentage) => {
  return 100 - (0.4 * moonlightPercentage + 0.6 * cloudCoveragePercentage);
};

const Visibility = () => {
  const data = useContext(DataContext);

  if (!data) {
    return <div>Loading...</div>;
  }

  const moonlightPercentage = data.days[0].moonphase * 100;
  const cloudCoveragePercentage = data.days[0].hours.reduce((sum, hour) => sum + hour.cloudcover, 0) / data.days[0].hours.length;

  const visibilityPercentage = calculateVisibilityPercentage(moonlightPercentage, cloudCoveragePercentage);

  return <div className="visibility-text">{visibilityPercentage.toFixed(0)}%</div>;
};

export default Visibility;
