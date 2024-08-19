import React, { useContext } from "react";
import DataContext from "./DataContext";
import moonPhaseImages from "./Images";

// if moonPhase < 0.1 || moonPhase > 0.9 , moonPhase = "New"
// if (moonPhase >= 0.1 && moonPhase < 0.2) || (moonPhase > 0.8 && moonPhase <= 0.9) , moonPhase = "Crescent"
// if (moonPhase >= 0.2 && moonPhase < 0.3) || (moonPhase > 0.7 && moonPhase <= 0.8) , moonPhase = "Quarter"
// if (moonPhase >= 0.3 && moonPhase < 0.45) || (moonPhase > 0.55 && moonPhase <= 0.7) , moonPhase = "Gibbous"
// if moonPhase >= 0.45 && moonPhase <= 0.55 , moonPhase = "Full"
const getMoonPhaseImage = (moonPhase) => {
  if (moonPhase < 0.1 || moonPhase > 0.9) return moonPhaseImages["New"];
  if ((moonPhase >= 0.1 && moonPhase < 0.2) || (moonPhase > 0.8 && moonPhase <= 0.9)) return moonPhaseImages["Crescent"];
  if ((moonPhase >= 0.2 && moonPhase < 0.3) || (moonPhase > 0.7 && moonPhase <= 0.8)) return moonPhaseImages["Quarter"];
  if ((moonPhase >= 0.3 && moonPhase < 0.45) || (moonPhase > 0.55 && moonPhase <= 0.7)) return moonPhaseImages["Gibbous"];
  if (moonPhase >= 0.45 && moonPhase <= 0.55) return moonPhaseImages["Full"];
  return null;
};

const MoonPhase = () => {
  const data = useContext(DataContext);

  if (!data) {
    return <div>Loading...</div>;
  }

  const moonPhase = data.days[0].moonphase;
  const moonPhaseImage = getMoonPhaseImage(moonPhase);
  const moonPhasePercentage = moonPhase <= 0.5 ? (moonPhase * 200).toFixed(0) + "% Full Moon" : ((1 - moonPhase) * 200).toFixed(2) + "% Full Moon";
  return (
    <div className="moon-phase-img">
      <img src={moonPhaseImage} alt="Moon Phase" />
      <div className="moon-phase-text">{moonPhasePercentage}</div>
    </div>
  );
};

export default MoonPhase;
