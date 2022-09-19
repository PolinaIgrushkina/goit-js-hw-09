const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');

const bodyEl = document.querySelector('body');

//Добавляет событие на кнопку Старт
startBtnEl.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
    timerId = setInterval(() => {
    
      bodyEl.style.backgroundColor = getRandomHexColor();
      updateAttribute(startBtnEl, stopBtnEl);
      
  }, 1000);
};

//Добавляет событие на кнопку Стоп
stopBtnEl.addEventListener('click', onStopBtnClick);

function onStopBtnClick() {
  clearInterval(timerId);
  updateAttribute(stopBtnEl, startBtnEl)
};

//Функция генерации случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function updateAttribute(element1, element2) {
  element1.setAttribute('disabled', true);
  element2.removeAttribute('disabled');
};