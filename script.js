// Label date
let dateLabel = [
  document.getElementById("day-label"),
  document.getElementById("month-label"),
  document.getElementById("year-label"),
];

// Input date
let dateBirth = [
  document.getElementById("birth-day"),
  document.getElementById("birth-month"),
  document.getElementById("birth-year"),
];

// Error message
let errorMsg = [
  document.getElementById("msg-day"),
  document.getElementById("msg-month"),
  document.getElementById("msg-year"),
];

// Age date
let currentAge = [
  document.getElementById("current-day"),
  document.getElementById("current-month"),
  document.getElementById("current-year"),
];

// Button
let btn = document.getElementById("btn");

// Get value input to be global
let dateBirthValue;
let getDateBirthValue = () => {
  dateBirthValue = [
    parseInt(dateBirth[0].value),
    parseInt(dateBirth[1].value),
    parseInt(dateBirth[2].value),
  ];
};

// Add error class function
let addError = (i) => {
  dateLabel[i].classList.add("error");
  dateBirth[i].classList.add("error");
  errorMsg[i].classList.add("error");
};

// Remove error class function
let removeError = (i) => {
  dateLabel[i].classList.remove("error");
  dateBirth[i].classList.remove("error");
  errorMsg[i].classList.remove("error");
};

// Validate day
let isDayValid = (day, month, year) => {
  if (day < 1 || day > 31) {
    addError(0);
    errorMsg[0].innerHTML = "Must be a valid day";
    return false;
  }

  // Check day with respect to month
  if (month === 2) {
    // February
    let lastDayOfMonth =
      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    if (day > lastDayOfMonth) {
      addError(0);
      errorMsg[0].innerHTML = "Must be a valid day";
      return false;
    }
  }

  return true;
};

// Validate month
let isMonthValid = (month) => {
  if (month < 1 || month > 12) {
    addError(1);
    errorMsg[1].innerHTML = "Must be a valid month";
    return false;
  }
  return true;
};

// Validate year
let isYearValid = (year, todayYear) => {
  if (year > todayYear) {
    addError(2);
    errorMsg[2].innerHTML = "Must be in the past";
    return false;
  }
  return true;
};

// Validate date
let isInvalidDate = () => {
  // Todays date
  let today = currentDate();
  let todayYear = today[2];
  // Birth date
  getDateBirthValue();

  let day = dateBirthValue[0];
  let month = dateBirthValue[1];
  let year = dateBirthValue[2];

  let isDayValidResult = isDayValid(day, month, year);
  let isMonthValidResult = isMonthValid(month);
  let isYearValidResult = isYearValid(year, todayYear);

  return !(isDayValidResult && isMonthValidResult && isYearValidResult);
};

// Calculating current date
let currentDate = () => {
  let today = new Date();
  let todayDate = [today.getDate(), today.getMonth() + 1, today.getFullYear()];
  return todayDate;
};

// Calculating Age
let calculateAge = () => {
  // For current date
  let today = currentDate();
  let age = [];
  for (let i = 0; i < dateBirthValue.length; i++) {
    age.push(Math.abs(today[i] - dateBirthValue[i]));
  }
  return age;
};

// Clear error messages
let clearErrorMessages = () => {
  for (let i = 0; i < errorMsg.length; i++) {
    errorMsg[i].innerHTML = "";
  }
};

// Main Function
btn.addEventListener("click", () => {
  // For input date
  getDateBirthValue();

  // Clear previous error messages
  clearErrorMessages();

  // For current age
  let age = calculateAge();

  // Iteration
  for (let i = 0; i < dateBirthValue.length; i++) {
    if (isNaN(dateBirthValue[i]) || dateBirthValue[i] === "") {
      // Adding error class
      addError(i);
      // Displaying error message
      errorMsg[i].innerHTML = "This field is required";
    } else {
      if (!isInvalidDate()) {
        // Removing error class
        removeError(i);
        // Displaying age
        currentAge[i].innerHTML = age[i];
      } else {
        addError(i);
      }
    }
  }
});
