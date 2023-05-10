import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { addOneDayToArray } from "./utils/addOneDayToArray";
import { groupConsecutiveDates } from "./utils/groupConsecutiveDates";
function App() {
  const dates = [
    "2023-04-10",
    "2023-04-11",
    "2023-04-12",
    "2023-04-14",
    "2023-04-15",
    "2023-05-04",
    "2023-05-05",
    "2023-05-06",
    "2023-05-09",
    "2023-05-10",
  ];

  const grouped = groupConsecutiveDates(dates);
  const addOneDate = addOneDayToArray(grouped);
  debugger;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
