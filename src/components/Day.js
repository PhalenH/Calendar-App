import dayjs from "dayjs";
import React from "react";

export default function Day({ day }) {
  function getcurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue 600 text-wide rounded-full w-7"
      : "";
  }
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        <p className="text-sm mt-1"> {day.format("ddd").toUpperCase()} </p>
        <p className={`text-sm p-1 my-1 text-center ${getcurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
    </div>
  );
}
