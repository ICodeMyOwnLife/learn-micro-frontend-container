import React from 'react';
import ReactDOM from 'react-dom';
import { calculate } from 'cb-math-fun';
import './index.css';
import Root from 'Root';
import * as serviceWorker from './serviceWorker';

console.log(calculate(4, 5));


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const installServiceWorker = async () => {
  try {
    const registration = await navigator.serviceWorker.register(
      '/serviceWorkers/1.js',
    );
    console.log('Registered SW');
    return registration;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

window.addEventListener('load', async () => {
  if ('serviceWorker' in window.navigator) {
    await installServiceWorker();
  }
});
