import React, { useState } from "react";
import MapOverlay from "./components/MapOverlay";
import YearSelector from "./components/YearSelector";
import PresenceChart from "./components/PresenceChart";
import mapImage from "/map.png";

const emptyData = Object.fromEntries(
  Array.from({ length: 10 }, (_, i) => [
    2016 + i,
    { R1: "", R2: "", R3: "", R4: "", R5: "" },
  ])
);

function App() {
  const [currentYear, setCurrentYear] = useState(2016);
  const [data, setData] = useState(emptyData);

  const handleChange = (year, region, value) => {
    const val = value.toUpperCase() === "Y" ? "Y" : value.toUpperCase() === "N" ? "N" : "";
    setData((prev) => ({
      ...prev,
      [year]: { ...prev[year], [region]: val },
    }));
  };

  return (
    <div className="p-4 space-y-4">
      <YearSelector currentYear={currentYear} setCurrentYear={setCurrentYear} />
      <div className="flex gap-4">
        <div className="relative w-[500px] h-[700px]">
          <img src={mapImage} alt="Illinois River Basin" className="w-full h-full object-contain" />
          <MapOverlay year={currentYear} data={data[currentYear]} />
        </div>
        <PresenceChart data={data} onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
