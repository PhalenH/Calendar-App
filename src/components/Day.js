import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Day({ day }) {
  const [dayEvents, setDayEvents] = useState("");

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }
  const { setSelectedDay, setShowEventModal, savedEvents } =
    useContext(GlobalContext);

  useEffect(() => {
    const events = savedEvents.filter(
      (event) => dayjs(event.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events)
  }, [savedEvents, day]);

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        <p className="text-sm mt-1"> {day.format("ddd").toUpperCase()} </p>
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setSelectedDay(day);
          setShowEventModal(true);
        }}
      ></div>
    </div>
  );
}
