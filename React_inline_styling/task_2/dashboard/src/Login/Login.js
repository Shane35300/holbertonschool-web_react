import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.loginForm)}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="button">OK</button>
      </div>
    </React.Fragment>
  );
}

// Define styles with Aphrodite
const styles = StyleSheet.create({
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
});

export default Login;
