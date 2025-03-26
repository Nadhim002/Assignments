import React from "react";

export default function Number({ number = 1 }) {
  // Define the segment patterns for numbers 0-9
  const pattern = {
    0: [true, true, true, false, true, true, true],
    1: [false, false, true, false, false, true, false],
    2: [true, false, true, true, true, false, true],
    3: [true, false, true, true, false, true, true],
    4: [false, true, true, true, false, true, false],
    5: [true, true, false, true, false, true, true],
    6: [true, true, false, true, true, true, true],
    7: [true, false, true, false, false, true, false],
    8: [true, true, true, true, true, true, true],
    9: [true, true, true, true, false, true, true],
  };

  // Get the pattern for the given number (default to 0 if not found)
  const currPattern = pattern[number] || pattern[0];

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Top segment */}
      <div
        className={`h-2 w-8 bg-red-400 ${currPattern[0] ? "opacity-100" : "opacity-10"}`}
      ></div>

      {/* Middle Row */}
      <div className="flex flex-row">
        <div
          className={`h-8 w-2 bg-red-400 ${currPattern[1] ? "opacity-100" : "opacity-10"}`}
        ></div>
        <div className="w-4"></div>
        <div
          className={`h-8 w-2 bg-red-400 ${currPattern[2] ? "opacity-100" : "opacity-10"}`}
        ></div>
      </div>

      {/* Middle segment */}
      <div
        className={`h-2 w-8 bg-red-400 ${currPattern[3] ? "opacity-100" : "opacity-10"}`}
      ></div>

      {/* Bottom Row */}
      <div className="flex flex-row">
        <div
          className={`h-8 w-2 bg-red-400 ${currPattern[4] ? "opacity-100" : "opacity-10"}`}
        ></div>
        <div className="w-4"></div>
        <div
          className={`h-8 w-2 bg-red-400 ${currPattern[5] ? "opacity-100" : "opacity-10"}`}
        ></div>
      </div>

      {/* Bottom segment */}
      <div
        className={`h-2 w-8 bg-red-400 ${currPattern[6] ? "opacity-100" : "opacity-10"}`}
      ></div>
    </div>
  );
}
