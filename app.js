"use strict";
const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");
const session = document.querySelector(".session");
const date = document.querySelector(".date");
window.onload = () => {
   mainFunction();
};

const getMonths = function (time) {
   let month = time.getMonth();
   switch (month) {
      case 0:
         return "January";
         break;
      case 1:
         return "February";
         break;
      case 2:
         return "March";
         break;
      case 3:
         return "April";
         break;
      case 4:
         return "May";
         break;
      case 5:
         return "June";
         break;
      case 6:
         return "July";
         break;
      case 7:
         return "August";
         break;
      case 8:
         return "September";
         break;
      case 9:
         return "October";
         break;
      case 10:
         return "Novermber";
         break;
      case 11:
         return "December";
         break;
   }
};

const getDays = function (time) {
   let day = time.getDay();
   switch (day) {
      case 0:
         return "Sunday";
         break;
      case 1:
         return "Monday";
         break;
      case 2:
         return "Tuesday";
         break;
      case 3:
         return "Wednesday";
         break;
      case 4:
         return "Thursday";
         break;
      case 5:
         return "Friday";
         break;
      case 6:
         return "Saturday";
         break;
   }
};

const counter = function (n) {
   n.textContent = n.textContent.padStart(2, "0");
};

const mainFunction = function () {
   const time = new Date();
   date.textContent = `${getDays(time)}, ${getMonths(
      time
   )} ${time.getDate()}, ${time.getFullYear()}`;

   let hrs = time.getHours();

   if (hrs >= 12) {
      session.textContent = "PM";
   } else {
      session.textContent = "AM";
   }
   if (hrs > 12) {
      hrs = hrs - 12;
   }
   hour.textContent = hrs;
   minute.textContent = time.getMinutes();
   second.textContent = time.getSeconds();
   counter(hour);
   counter(minute);
   counter(second);
};

setInterval(mainFunction, 1000);
