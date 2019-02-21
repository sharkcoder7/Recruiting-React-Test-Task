import ReactDOM from 'react-dom';
import React from 'react';
import App from 'components/App';

import store from './state';
import fetch from 'isomorphic-fetch';
import {Provider} from 'react-redux';


if (module.hot) {
  module.hot.accept();

  module.hot.dispose((data) => {
    [].slice.apply(document.querySelector('#app').children).forEach(function(c) { c.remove() });
  });
}

const load = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#app')
  );
};

store.subscribe(() => {
  console.log('New state', store.getState());
});

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}