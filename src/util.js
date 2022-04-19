import dayjs from "dayjs";

// default value of current month (numbered 0-11)
export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();

  // creates new dayjs object that represents the first day of the month, -1 for last day or previous month
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfMonth;

  // 5 for rows in the calendar, 7 for columns for each day
  const dayMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });

  return dayMatrix;
}
