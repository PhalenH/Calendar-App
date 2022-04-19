import React, {useState} from "react";
import "./App.css";
import { getMonth } from "./util";
import CalendarHeader from './components/CalendarHeader'
import SideBar from "./components/SideBar";
import Month from "./components/Month";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  return (
    <>
      <div className="h-screen flex flex-columns">
        <CalendarHeader />
        <div className="flex flex-1">
          <SideBar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
