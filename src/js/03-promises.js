import Notiflix from 'notiflix';

//Создание формы
const formEl = document.querySelector('.form');

//Добавление на форму слушателя события
formEl.addEventListener('submit', onFormSubmit);

//При сабмите формы запускаем вызов функции createPromise() в цикле
//где количесвто выховов = число из инпута amount
//задержка = число из инпута delay
//шаг(на сколько каждый раз будет увеличиваться задержка) = число из инпута step
function onFormSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.target.elements;
  
  let delayVal = Number(delay.value);
  let stepVal = Number(step.value);
  let amountVal = Number(amount.value);

  for (let i = 1; i <= amountVal; i += 1) {
    createPromise(i, delayVal)
      .then(({ position, delay }) => Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
      .catch(({ position, delay }) => Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
    delayVal += stepVal;
  }
};


function createPromise(position, delay) {
  
  return new Promise((resolve, reject) =>  {

    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
        
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
    }); 
};



