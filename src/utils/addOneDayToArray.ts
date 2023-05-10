import { format } from "date-fns";

export const addOneDayToArray = (arr: string[][]) => {
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
