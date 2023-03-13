// import Notiflix from 'notiflix';

// const form = document.querySelector('.form');

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;

//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   const amount = event.target.elements.amount.value;
//   const delay = event.target.elements.delay.value;
//   const step = event.target.elements.step.value;

//   for (let i = 1; i <= amount; i += 1) {
//     createPromise(i, delay + (i - 1) * step).then(({ position, delay }) => {
//       Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     }).catch(({ position, delay }) => {
//       Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//     });
//   }
// }

// form.addEventListener('submit', handleSubmit);

import Notiflix from 'notiflix';

const form = document.querySelector('.form')
const delay = document.querySelector('input[name="delay"]')
const step = document.querySelector('input[name="step"]')
const amount = document.querySelector('input[name="amount"]')
const btnCreatePromise = document.querySelector('button[type="submit"]')

function createPromise(position, delay) {

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3
      if (shouldResolve) {
        resolve({ position, delay})
      } else {
        reject({ position, delay})
      }
    }, delay)
  })
  return promise
}

btnCreatePromise.addEventListener('click', e => {
  e.preventDefault()
  let firstDelay = Number(delay.value)
  let delayStep = Number(step.value)

  for (let i = 0; i < amount.value; i += 1) {
    createPromise(1 + i, firstDelay + i * delayStep)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
        `✅ Fulfilled promise ${position} in ${delay}ms`
      )
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
        `❌ Rejected promise ${position} in ${delay}ms`
      )
    })
  }
  form.reset()
})