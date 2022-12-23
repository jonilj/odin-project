// Function to calculate current time
function startTime() {
  let now = new Date(); 
  let min = now.getMinutes();
  let hour = now.getHours();
  hour = checkTime(hour)
  min = checkTime(min);
  document.getElementById('timeDisplay').innerHTML = hour + ":" + min;
  setTimeout(startTime, 500);
} 

// If hour and minute is less than 10, add 0 in front of digit
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
    }
    return i;
}

// Function to get current day (name and number) and month
function startDate() {
  let now = new Date();
  let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  month = month[now.getMonth()];
  let day = now.getDate();

  document.getElementById('dateDisplay').innerHTML = weekDay[now.getDay()] + ", " + month + " " + day;
}