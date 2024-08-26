import React from 'react';
import './Login.css';

function Login() {
	return (
		<React.Fragment>
			<div className="loginForm">
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

export default Login;
