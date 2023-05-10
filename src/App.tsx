import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { format } from "date-fns";
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
  const groupConsecutiveDates = (dates: string[]) => {
    const sortedDates = dates
      .slice()
      .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    const groups = [];
    let currentGroup = [sortedDates[0]];
    for (let i = 1; i < sortedDates.length; i++) {
      const currentDate = new Date(sortedDates[i]).getTime();
      const prevDate = new Date(sortedDates[i - 1]).getTime();
      const dayDiff = (currentDate - prevDate) / (1000 * 60 * 60 * 24);
      if (dayDiff <= 1) {
        // It's tomorrow
        currentGroup.push(sortedDates[i]);
      } else {
        // Not tomorrow
        groups.push(currentGroup);
        currentGroup = [sortedDates[i]];
      }
    }
    if (currentGroup.length >= 1) {
      groups.push(currentGroup);
    }
    return groups;
  };
  const addOneDayToArray = (arr: string[][]) => {
    return arr.reduce((a: string[][], c: string[]) => {
      const currentArr = c.slice();

      const lastDate = currentArr[currentArr.length - 1];
      const nextDate = new Date(
        new Date(lastDate).getTime() + 24 * 60 * 60 * 1000
      );
      const nextDateString = format(
        new Date(
          new Date(nextDate).getFullYear(),
          new Date(nextDate).getMonth(),
          new Date(nextDate).getDate()
        ),
        "yyyy-MM-dd"
      );
      currentArr.push(nextDateString);
      return a.concat([currentArr]);
    }, []);
  };

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
