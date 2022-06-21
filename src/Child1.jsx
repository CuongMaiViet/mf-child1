import React from "react";
import DatePicker from "./components/DatePicker";

const Child1 = () => {
  // const { date, Picker } = DatePicker();
  // console.log(date);
  return (
    <div>
      <div>Name: child1</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
      <DatePicker />
    </div>
  );
};

export default Child1;
