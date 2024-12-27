import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const delay = form.delay.value;
  let state;

  for (let i of form.state) {
    if (i.checked === true) {
      state = i.value;
    }
  }

  const notification = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  notification
    .then(resolve => {
      // console.log(`✅ Fulfilled promise in ${resolve}ms`);
      iziToast.show({
        message: `✅ Fulfilled promise in ${resolve}ms`,
        position: 'topRight',
        timeout: 5000,
        messageColor: '#ffffff',
        backgroundColor: 'green',
        close: false,
        progressBar: false,
      });
    })

    .catch(reason => {
      // console.log(`❌ Rejected promise in ${reason}ms`);
      iziToast.show({
        message: `❌ Rejected promise in ${reason}ms`,
        position: 'topRight',
        timeout: 5000,
        messageColor: '#ffffff',
        backgroundColor: 'red',
        close: false,
        progressBar: false,
      });
    });
}
