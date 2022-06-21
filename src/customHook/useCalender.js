import * as chrono from "chrono-node";

const calendar = [
  "sunday",
  "saturday",
  "friday",
  "thursday",
  "wednesday",
  "tuesday",
  "monday",
  "december",
  "november",
  "october",
  "september",
  "august",
  "july",
  "june",
  "may",
  "april",
  "march",
  "february",
  "january",
  "yesterday",
  "tomorrow",
  "today",
];

const suggestionKeyword = calendar.reduce((acc, str) => {
  for (var i = 1; i < str.length; i++) {
    acc[str.substring(0, i)] = str;
  }
  return acc;
}, {});

const suggest = (str) => {
  return str
    .split(/\b/)
    .map((i) => suggestionKeyword[i] || i)
    .join("");
};

const useCalender = () => {
  const calender = (value) => {
    if (!(typeof value === "string" || value instanceof String)) {
      return {
        sts: false,
        msg: "Chỉ nhận String",
      };
    }

    let suggestion = suggest(value.toLowerCase());

    const dateObj = chrono.parse(suggestion);

    if (dateObj?.length === 0) return null;

    return dateObj[0];
  };

  return { calender };
};

export default useCalender;
