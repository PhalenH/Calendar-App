import React, { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      // allows update of the event by checking through array
      return state.map((event) => (event.id === payload.id ? payload : event));
    case "delete":
      return state.filter((event) =>
        event.id !== payload.id ? payload : event
      );
    default:
      throw new Error();
  }
}
// initial value
function initialEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [miniCalendarMonth, setMiniCalendarMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  // reducer take sin 3 parameters, the reducer, the intial value, and the
  const [savedEvents, dispatchCallEvent] = useReducer(
    savedEventsReducer,
    [],
    initialEvents
  );

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    if (miniCalendarMonth !== null) {
      setMonthIndex(miniCalendarMonth);
    }
  }, [miniCalendarMonth]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        miniCalendarMonth,
        setMiniCalendarMonth,
        selectedDay,
        setSelectedDay,
        showEventModal,
        setShowEventModal,
        dispatchCallEvent,
        savedEvents,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
