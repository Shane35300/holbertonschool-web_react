import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="root-container">
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="root-app">
        <App />
      </div>
    </div>
  </React.StrictMode>
);
