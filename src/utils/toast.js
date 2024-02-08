import Toastify from 'toastify-js';

const cssVars = window.getComputedStyle(document.querySelector(':root'));

export function newToast (message, time = 3000) {
  Toastify({
    text: message,
    duration: time,
    gravity: 'top',
    position: 'right',
    close: true
  }).showToast();
}

export function succesToast (message, time = 3000) {
  Toastify({
    text: message,
    duration: time,
    gravity: 'top',
    position: 'right',
    style: { borderColor: cssVars.getPropertyValue('--toast-success-bar'), background: cssVars.getPropertyValue('--toast-success-color') },
    close: true
  }).showToast();
}

export function wrongToast (message, time = 3000) {
  Toastify({
    text: message,
    duration: time,
    gravity: 'top',
    position: 'right',
    style: { borderColor: cssVars.getPropertyValue('--toast-wrong-bar'), background: cssVars.getPropertyValue('--toast-wrong-color') },
    close: true
  }).showToast();
}
