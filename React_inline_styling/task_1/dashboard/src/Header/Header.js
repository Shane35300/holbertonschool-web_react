import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <header className={css(styles.appHeader)}>
      <img src={logo} className={css(styles.appLogo)} alt="Holberton logo" />
      <h1>School dashboard</h1>
    </header>
  );
}

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: 'white',
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: '20px',
    color: 'rgb(223, 3, 3)',
  },
  appLogo: {
    height: '200px',
    width: '200px',
  },
});

export default Header;
