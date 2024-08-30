import React from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';

function Footer() {
  return (
    <footer className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>Copyright {getFullYear()} - Holberton School</p>
    </footer>
  );
}

export default Footer;
