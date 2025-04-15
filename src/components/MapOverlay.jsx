import React from "react";

const regions = {
  R1: {
    color: "bg-red-500/50",
    style: "absolute left-[90px] top-[500px] w-[50px] h-[130px]",
  },
  R2: {
    color: "bg-green-500/50",
    style: "absolute left-[160px] top-[400px] w-[60px] h-[100px]",
  },
  R3: {
    color: "bg-orange-500/50",
    style: "absolute left-[190px] top-[300px] w-[60px] h-[80px]",
  },
  R4: {
    color: "bg-blue-500/50",
    style: "absolute left-[270px] top-[200px] w-[70px] h-[70px]",
  },
  R5: {
    color: "bg-purple-500/50",
    style: "absolute left-[330px] top-[100px] w-[70px] h-[70px]",
  },
};

function MapOverlay({ year, data }) {
  return (
    <>
      {Object.entries(data).map(([region, presence]) =>
        presence === "Y" ? (
          <div
            key={region}
            className={`${regions[region].color} ${regions[region].style} rounded-full border border-black`}
          ></div>
        ) : null
      )}
    </>
  );
}

export default MapOverlay;
