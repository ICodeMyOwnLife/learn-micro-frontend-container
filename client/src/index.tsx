import React from 'react';
import ReactDOM from 'react-dom';
import { bootstrapContainer } from 'cb-react-micro-frontend';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Root from 'Root';

bootstrapContainer();

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
