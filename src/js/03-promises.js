import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function handleSubmit(event) {
  event.preventDefault();
  const amount = event.target.elements.amount.value;
  const delay = event.target.elements.delay.value;
  const step = event.target.elements.step.value;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay + (i - 1) * step).then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
}

form.addEventListener('submit', handleSubmit);
