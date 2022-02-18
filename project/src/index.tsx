import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  PLACE_CARDS_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App placeCardsCount = {Setting.PLACE_CARDS_COUNT}/>
  </React.StrictMode>,
  document.getElementById('root'));

