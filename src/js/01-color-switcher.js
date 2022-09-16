const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');

const bodyEl = document.querySelector('body');

//Добавляет событие на кнопку Старт
startBtnEl.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
    timerId = setInterval(() => {
    
    bodyEl.style.backgroundColor = getRandomHexColor();
    startBtnEl.setAttribute('disabled', true);
    stopBtnEl.removeAttribute('disabled');
      
  }, 1000);
};

//Добавляет событие на кнопку Стоп
stopBtnEl.addEventListener('click', onStopBtnClick);

function onStopBtnClick() {
  clearInterval(timerId);
  stopBtnEl.setAttribute('disabled', true);
  startBtnEl.removeAttribute('disabled');
};

//Функция генерации случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};