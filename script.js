// Selecting id
let ageDay = document.getElementById("current-day");
let ageMonth = document.getElementById("current-month");
let ageYear = document.getElementById("current-year");

let dayLabel = document.getElementById("day-label");
let monthLabel = document.getElementById("month-label");
let yearLabel = document.getElementById("year-label");

let msgDay = document.getElementById("msg-day");
let msgMonth = document.getElementById("msg-month");
let msgYear = document.getElementById("msg-year");

function calculateAge() {
  // Taking birth date from user
  let birthDay = document.getElementById("birth-day");
  let birthMonth = document.getElementById("birth-month");
  let birthYear = document.getElementById("birth-year");

  // Calculating current date
  let currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  // Checking empty date
  if (birthDay.value == "" || birthMonth.value == "" || birthYear.value == "") {
    if (birthDay.value == "") {
      dayLabel.classList.add("error");
      birthDay.classList.add("error");
      msgDay.classList.add("error");
      msgDay.innerHTML = "This field is required";
    }
    if (birthMonth.value == "") {
      monthLabel.classList.add("error");
      birthMonth.classList.add("error");
      msgMonth.classList.add("error");
      msgMonth.innerHTML = "This field is required";
    }
    if (birthYear.value == "") {
      yearLabel.classList.add("error");
      birthYear.classList.add("error");
      msgYear.classList.add("error");
      msgYear.innerHTML = "This field is required";
    }
  } else {
    // Checking birth date
    if (
      birthDay.value <= 31 &&
      birthDay.value > 0 &&
      birthMonth.value <= 12 &&
      birthMonth.value > 0 &&
      birthYear.value <= currentYear &&
      birthYear.value > 0
    ) {
      // Calculating age
      let currentAgeDay = Math.abs(currentDay - birthDay.value);
      let currentAgeMonth = Math.abs(currentMonth - birthMonth.value);
      let currentAgeYear = Math.abs(currentYear - birthYear.value);

      // Displaying age
      ageDay.innerHTML = currentAgeDay;
      ageMonth.innerHTML = currentAgeMonth;
      ageYear.innerHTML = currentAgeYear;

      // Removing error msg
      dayLabel.classList.remove("error");
      birthDay.classList.remove("error");
      msgDay.classList.remove("error");
      monthLabel.classList.remove("error");
      birthMonth.classList.remove("error");
      msgMonth.classList.remove("error");
      yearLabel.classList.remove("error");
      birthYear.classList.remove("error");
      msgYear.classList.remove("error");
    } else {
      // Set the value to null
      ageDay.innerHTML = "--";
      ageMonth.innerHTML = "--";
      ageYear.innerHTML = "--";

      // Adding error class
      dayLabel.classList.add("error");
      birthDay.classList.add("error");
      monthLabel.classList.add("error");
      birthMonth.classList.add("error");
      yearLabel.classList.add("error");
      birthYear.classList.add("error");
      if (!(birthDay.value <= 31 && birthDay.value > 0)) {
        msgDay.classList.add("error");
        msgDay.innerHTML = "Must be a valid date";
      }
      if (!(birthMonth.value <= 12 && birthMonth.value > 0)) {
        msgMonth.classList.add("error");
        msgMonth.innerHTML = "Must be a valid month";
      }
      if (!(birthYear.value <= currentYear && birthYear.value > 0)) {
        msgYear.classList.add("error");
        msgYear.innerHTML = "Must be in the past";
      }
    }
  }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", calculateAge);

btn.addEventListener("dblclick", function () {
  location.reload();
});
