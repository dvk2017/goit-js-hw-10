import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const button = document.getElementById('str-btn');
const input = document.getElementById('datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > Date.now()) {
      userSelectedDate = selectedDates[0];
      button.disabled = false;
    } else {
      iziToast.show({
        title: 'Alert',
        message: 'Please choose a date in the future',
        position: 'center',
        timeout: 0,
        closeOnEscape: true,
        closeOnClick: true,
        titleColor: '#ffffff',
        messageColor: '#ffffff',
        backgroundColor: 'red',
        icon: 'material-icons',
        iconText: 'highlight_off',
        iconColor: '#ffffff',
      });
      button.disabled = true;
    }
  },
};

flatpickr('#datetime-picker', options);

let userSelectedDate;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const daysFild = document.querySelector('.field span[data-days]');
const hoursFild = document.querySelector('.field span[data-hours]');
const minutesFild = document.querySelector('.field span[data-minutes]');
const secondsFild = document.querySelector('.field span[data-seconds]');

function pad(num) {
  return String(num).padStart(2, '0');
}

function countdown(setDate) {
  input.disabled = true;
  button.disabled = true;

  const intervalID = setInterval(() => {
    const timeLeft = setDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(timeLeft);
    daysFild.textContent = pad(days);
    hoursFild.textContent = pad(hours);
    minutesFild.textContent = pad(minutes);
    secondsFild.textContent = pad(seconds);

    if (timeLeft < 1000) {
      clearInterval(intervalID);
      input.disabled = false;
    }
  }, 1000);
}

button.addEventListener('click', () => countdown(userSelectedDate));
