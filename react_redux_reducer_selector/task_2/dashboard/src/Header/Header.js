import React, { Component } from 'react';
import AppContext from '../App/AppContext';

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <header>
        <h1>Header</h1>
        {user && user.isLoggedIn && (
          <div id="logoutSection">
            <p>Welcome {user.email} (<button onClick={logOut}>Logout</button>)</p>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
