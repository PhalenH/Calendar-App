import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getMonth } from "../util";

export default function SmallCalendar() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  // local state
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);
  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
        <button>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_left
            </span>
        </button>
        <button>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_right
            </span>
        </button>
      </header>
    </div>
  );
}
