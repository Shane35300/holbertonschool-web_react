import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleLoginSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleLoginSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
          />
        </label>
        <input
          type="submit"
          value="Login"
          disabled={!email || !password} // Assurez-vous que le bouton est bien présent
        />
      </form>
    );
  }
}

export default Login;
