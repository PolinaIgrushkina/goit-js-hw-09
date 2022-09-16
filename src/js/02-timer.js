import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

//Переменные
const inputEl = document.querySelector("#datetime-picker");

const btnStartEl = document.querySelector("[data-start]");
btnStartEl.setAttribute('disabled', true);

const daysTimer = document.querySelector("[data-days]");
const hoursTimer = document.querySelector("[data-hours]");
const minutesTimer = document.querySelector("[data-minutes]");
const secondsTimer = document.querySelector("[data-second]");

//Библиотека flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(inputEl, options);

//Клик по инпуту
inputEl.addEventListener('change', onInputClick);

function onInputClick(event) {
  const selectedTime = new Date(event.target.value);
 
  if (selectedTime.getTime() < Date.now()) {
    return Notiflix.Notify.failure('Please choose a date in the future');
    //window.alert("Please choose a date in the future");
  }
  btnStartEl.removeAttribute('disabled');

  btnStartEl.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  intervalId = setInterval(() => { 
    const msResult = Date.now(options.selectedDates) - Date.now();
    console.log(msResult);
  }, 1000);
}
};

//Клик по кнопке
// btnStartEl.addEventListener('click', onBtnClick);

// function onBtnClick(event) {
//   intervalId = setInterval(() => { 
//     const msResult = Date.now(options.onClose()) - Date.now();
//     console.log(msResult);
//   }, 1000);
// }


// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// };





