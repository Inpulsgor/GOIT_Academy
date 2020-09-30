import {
  alert,
  notice,
  info,
  success,
  error,
  defaultModules,
} from '@pnotify/core';

export const alertFn = () => {
  const myAlert = alert({
    text: 'Too many matches found. Please enter a more specific query!',
    type: 'notice',
    width: '700px',
    animation: 'fade',
    shadow: true,
    closerHover: true,
    delay: 5000,
    // modules: {},
  });
};
