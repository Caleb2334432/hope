import React from "react";

const years = Array.from({ length: 10 }, (_, i) => 2016 + i);
const regions = ["R1", "R2", "R3", "R4", "R5"];

function PresenceChart({ data, onChange }) {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-500">
        <thead>
          <tr>
            <th className="border border-gray-400 px-2 py-1">Year</th>
            {regions.map((region) => (
              <th key={region} className="border border-gray-400 px-2 py-1">
                {region.replace("R", "Region ")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {years.map((year) => (
            <tr key={year}>
              <td className="border border-gray-400 px-2 py-1 font-semibold">
                {year}
              </td>
              {regions.map((region) => (
                <td key={region} className="border border-gray-400 px-2 py-1">
                  <input
                    className="w-10 text-center border border-gray-300 rounded"
                    value={data[year][region] || ""}
                    onChange={(e) => onChange(year, region, e.target.value)}
                    maxLength={1}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PresenceChart;
