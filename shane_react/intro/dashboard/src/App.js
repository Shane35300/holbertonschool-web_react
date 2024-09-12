import logo from './nndt2.png';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Nounou-dit-tout DASHBOARD</h1>
      </header>
      <main className="App-body">
        <p>Connectez vous pour accéder à votre espace</p>
        <div className="loginForm">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <br />
          <button type="button">OK</button>
        </div>
      </main>
      <footer className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>Copyright {getFullYear()} - Shane Vaudrey</p>
      </footer>
    </div>
  );
}

export default App;
