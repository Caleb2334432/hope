import React from "react";

function YearSelector({ currentYear, setCurrentYear }) {
  const handleChange = (delta) => {
    const newYear = currentYear + delta;
    if (newYear >= 2016 && newYear <= 2025) {
      setCurrentYear(newYear);
    }
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <button
        onClick={() => handleChange(-1)}
        disabled={currentYear === 2016}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        ◀ Prev
      </button>
      <span className="text-xl font-semibold">{currentYear}</span>
      <button
        onClick={() => handleChange(1)}
        disabled={currentYear === 2025}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Next ▶
      </button>
    </div>
  );
}

export default YearSelector;
