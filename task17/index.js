let month = document.querySelector(".month")
let year = document.querySelector(".year")
let day = document.querySelector(".day")
let date = document.querySelector(".date")

let currentDate = new Date();

var months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

month.innerHTML = months[currentDate.getMonth()];
day.innerHTML = days[currentDate.getDay() - 1];
date.innerHTML = currentDate.getDate();
year.innerHTML = currentDate.getFullYear();