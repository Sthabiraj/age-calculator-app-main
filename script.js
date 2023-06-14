function calculateAge() {
  // Taking birth date from user
  let birthDay = parseInt(document.getElementById("birth-day").value);
  let birthMonth = parseInt(document.getElementById("birth-month").value);
  let birthYear = parseInt(document.getElementById("birth-year").value);

  // Calculating current date
  let currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  // Checking birth date
  if (
    (birthDay <= 31 || birthDay > 0) &&
    (birthMonth <= 12 || birthMonth > 0) &&
    (birthYear <= currentYear || birthYear > 0)
  ) {
    // Calculating age
    let currentAgeDay = Math.abs(currentDay - birthDay);
    let currentAgeMonth = Math.abs(currentMonth - birthMonth);
    let currentAgeYear = Math.abs(currentYear - birthYear);

    // Selecting id
    let ageDay = document.getElementById("current-day");
    let ageMonth = document.getElementById("current-month");
    let ageYear = document.getElementById("current-year");

    // Displaying age
    ageDay.innerHTML = currentAgeDay;
    ageMonth.innerHTML = currentAgeMonth;
    ageYear.innerHTML = currentAgeYear;
  } else {
    alert("Please enter a valid birthday");
  }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", calculateAge);
