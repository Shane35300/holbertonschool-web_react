import React from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import PropTypes from 'prop-types';

function Footer({ user }) {
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

// Définition des PropTypes
Footer.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
    email: PropTypes.string,
  }).isRequired,
};

// Définitions des defaultProps
Footer.defaultProps = {
  user: {
    isLoggedIn: false,
    email: '',
  },
};

export default Footer;
