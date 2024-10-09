import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ user, logout }) => {
  return (
    <header>
      <h1>Header</h1>
      {user && user.isLoggedIn && (
        <div id="logoutSection">
          <p>Welcome {user.email} (<button onClick={logout}>Logout</button>)</p>
        </div>
      )}
    </header>
  );
};

// Définition des PropTypes
Header.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
    email: PropTypes.string,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

// Définitions des defaultProps
Header.defaultProps = {
  user: {
    isLoggedIn: false,
    email: '',
  },
};

export default Header;
