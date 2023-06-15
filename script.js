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
  // Calculation
  let age = [];
  for (let i = 0; i < today.length; i++) {
    age.push(Math.abs(dateBirthValue[i] - today[i]));
  }
  return age;
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

// Main Function
btn.addEventListener("click", () => {
  // For input date
  getDateBirthValue();

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
      // Removing error class
      removeError(i);
      // Displaying age
      currentAge[i].innerHTML = age[i];
    }
  }
});
