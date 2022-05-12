import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { getMonth } from "../util";
import GlobalContext from "../context/GlobalContext";

export default function SmallCalendar() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  // local state
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  const { monthIndex, setMiniCalendarMonth, setSelectedDay, selectedDay } =
    useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  function handlePreviousMonth() {
    setCurrentMonthIndex(currentMonthIndex - 1);
  }

  function handleNextMonth() {
    setCurrentMonthIndex(currentMonthIndex + 1);
  }

  function getDay(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currentDay = day.format(format);
    const chosenDay = selectedDay && selectedDay.format(format);
    if (nowDay === currentDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (currentDay === chosenDay){
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    } else {
        return ""
    }
  }
  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
        <div>
          <button onClick={handlePreviousMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              chevron_left
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              chevron_right
            </span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, index) => (
              <button
                key={index}
                onClick={() => {
                  setMiniCalendarMonth(currentMonthIndex);
                  setSelectedDay(day);
                }}
                className={`py-1 w-full ${getDay(day)}`}
              >
                <span className="text-small">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
