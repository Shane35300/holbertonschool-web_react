import logo from './holberton-logo.jpg';
import React, { useEffect } from 'react';
import favicon from './favicon.ico';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = favicon;
    document.head.appendChild(link);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="loginForm">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <br />
          <button type="button">OK</button>
        </div>
      </div>
      <footer className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>Copyright {getFullYear()} - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
