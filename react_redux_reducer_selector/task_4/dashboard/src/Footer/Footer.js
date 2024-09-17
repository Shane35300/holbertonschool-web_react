import React, { useContext } from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import AppContext from '../App/AppContext'; // Importez votre contexte

function Footer() {
  const { user } = useContext(AppContext); // Consommez le contexte

  return (
    <footer className="App-footer">
      <p>{getFooterCopy(true)}</p>
      <p>Copyright {getFullYear()} - Holberton School</p>
      {user.isLoggedIn && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </footer>
  );
}

export default Footer;
