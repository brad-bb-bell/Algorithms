function dayOfProgrammer(year) {
  if (year >= 1700 && year <= 1917) {
    return "Gregorian calendar";
  } else {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      return "Leap Year";
    } else {
      return "Not Leap Year";
    }
  }
}

console.log(dayOfProgrammer(2017));
console.log(dayOfProgrammer(2016));
console.log(dayOfProgrammer(1800));
