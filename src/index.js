import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

import App from './components/App';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);



//Описание того как работает bindActionCreators 
// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }




// document.getElementById('inc').addEventListener('click', inc);


// document.getElementById('dec').addEventListener('click', dec);


// document.getElementById('rnd').addEventListener('click', () => {
//     const value = Math.floor(Math.random() * 10);
//     rnd(value);
//   });











