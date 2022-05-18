import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  miniCalendarMonth: 0,
  setMiniCalendarMonth: (index) => {},
  selectedDay: null,
  setSelectedDay: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCallEvent: ({ type, payload }) => {},
  savedEvents: [],
});

export default GlobalContext;
