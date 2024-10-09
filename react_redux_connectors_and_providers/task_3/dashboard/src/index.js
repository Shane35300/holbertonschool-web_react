import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App/App';
import uiReducer from './reducers/uiReducer';
import './styles.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Utilise compose de Redux ou l'extension

const store = createStore(
  uiReducer,
  composeEnhancers(applyMiddleware(thunk)) // Compose l'enhancer avec le middleware
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

console.log('Hello, Webpack!');
