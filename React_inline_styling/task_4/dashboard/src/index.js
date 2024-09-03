import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';  // Assurez-vous que ce chemin est correct
import './styles.css';  // Optionnel, en fonction de votre configuration

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
console.log('Hello, Webpack!');
