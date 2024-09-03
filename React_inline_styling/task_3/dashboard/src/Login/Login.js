import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.loginForm)}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="button">OK</button>
      </div>
    </React.Fragment>
  );
}

// Définir les styles avec Aphrodite
const styles = StyleSheet.create({
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    '@media (max-width: 900px)': {
      gap: '15px', // Ajuster l'écart pour les petits écrans si nécessaire
    },
    '@media (min-width: 900px)': {
      gap: '20px', // Ajuster l'écart pour les grands écrans si nécessaire
    },
  },
});

export default Login;
