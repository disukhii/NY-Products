import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterLoginStyle.css'
import Register from './Register'



class Login extends Register { // -- класовий компонент
	constructor(props) {
		super(props);

		this.state = { // - state -  обьэкт
			email: '',
            password: ''
		};

		this.update = this.update.bind(this); // дозволяє вносити зміни в input

		this.displayLogin = this.displayLogin.bind(this); // дозволяє зберігати дані з input
		console.log(this.state)
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value  // присваює значення у порядку ключа і значення
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You are logged in');
		console.log(this.state);  // перевірочна станція чи все працює
		
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
                   
					<button id="button-reg-log" value="Login">Увійти</button>
                    
				</form>

				<Link to="/register">Створити новий акаунт</Link>
			</div>
		);
	}
}

export default Login;
