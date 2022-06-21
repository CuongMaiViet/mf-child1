import React, { useEffect, useState } from "react";
import useCalender from "../customHook/useCalender";

const INITIAL_STATE = {
  refDate: "",
  fullDate: "",
  day: "",
  month: "",
  year: "",
};

const DatePicker = () => {
  const { calender } = useCalender();
  const [inputValue, setInputValue] = useState("");
  const [dateData, setDateData] = useState(INITIAL_STATE);

  useEffect(() => {
    const res = calender(inputValue);
    if (res === null) return setDateData(INITIAL_STATE);

    const refDate = res?.refDate;
    const date = res?.start;

    setDateData({
      ...dateData,
      refDate,
      fullDate: date.date().toDateString(),
      day: date.get("day"),
      month: date.get("month"),
      year: date.get("year"),
    });
  }, [inputValue]);

  return (
    <>
      <input
        name="inputValue"
        id="inputValue"
        value={inputValue}
        type="text"
        autoComplete="off"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      Date: {dateData.fullDate}
    </>
  );
};

export default DatePicker;
