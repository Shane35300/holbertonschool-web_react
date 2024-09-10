import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    // Initialiser l'état local avec les valeurs par défaut
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };

    // Lier les méthodes
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  // Fonction pour gérer la soumission du formulaire
  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  // Fonction pour gérer le changement dans l'input email
  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email }, this.verifyInputs);
  }

  // Fonction pour gérer le changement dans l'input password
  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password }, this.verifyInputs);
  }

  // Fonction pour vérifier si les champs email et password ne sont pas vides
  verifyInputs() {
    const { email, password } = this.state;
    if (email !== '' && password !== '') {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <React.Fragment>
        <div className={css(styles.loginForm)}>
          <h2>Login</h2>
          {/* Formulaire contrôlé */}
          <form onSubmit={this.handleLoginSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email} // Composant contrôlé
              onChange={this.handleChangeEmail}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password} // Composant contrôlé
              onChange={this.handleChangePassword}
              required
            />

            {/* Le bouton est désactivé si les champs ne sont pas remplis */}
            <input type="submit" value="OK" disabled={!enableSubmit} />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

// Styles avec Aphrodite
const styles = StyleSheet.create({
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    '@media (max-width: 900px)': {
      gap: '15px',
    },
    '@media (min-width: 900px)': {
      gap: '20px',
    },
  },
});

export default Login;
