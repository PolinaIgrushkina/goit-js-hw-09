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
const secondsTimer = document.querySelector("[data-seconds]");

let selectedDay = new Date();

let intervalId = null;

//Перезагрузка страницы
window.addEventListener('load', pageReload);

function pageReload() { };


//Библиотека flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDay = selectedDates[0];
    console.log(selectedDay);
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
};

//Клик по кнопке
btnStartEl.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  intervalId = setInterval(() => { 
    const msResult = selectedDay.getTime() - Date.now();
    const { days, hours, minutes, seconds } = convertMs(msResult);

    if (msResult < 1000 || pageReload()) {
      clearInterval(intervalId);
    };
    
    //Обновление таймера
    timerUpdate({ days, hours, minutes, seconds });

  }, 1000);
};

//Функция обновления таймера
function timerUpdate({ days, hours, minutes, seconds }) {
    daysTimer.textContent = `${days}`
    hoursTimer.textContent = `${hours}`
    minutesTimer.textContent = `${minutes}`
    secondsTimer.textContent = `${seconds}`
};

//Функция преобразования мс в дни, часы, минуты, секунды
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};




