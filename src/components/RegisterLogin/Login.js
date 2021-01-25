import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RegisterLoginStyle.css'
class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You are logged in');
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="login">
				<form onSubmit={this.displayLogin}>
					<h2>Залогінитись</h2>
					<div className="username">
						<input
							type="text"
							placeholder="Ваше імя..."
							value={this.state.email}
							onChange={this.update}
							name="email"
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Пароль..."
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
					</div>
                    <Link to='/profile'>
					<button id="button-reg-log" type="submit" value="Login">Увійти</button>
                    </Link>
				</form>

				<Link to="/register">Створити новий акаунт</Link>
			</div>
		);
	}
}

export default Login;
