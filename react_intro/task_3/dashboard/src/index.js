import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications';

ReactDOM.render(
  <React.StrictMode>
    <div className="root-container">
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="root-app">
        <App />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
