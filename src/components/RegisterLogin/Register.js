
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RegisterLoginStyle.css'


class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullname: '',
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
		console.log(name)
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You have successfully registered');
		console.log(this.state);
		
        
    }
    
	

	render() {
		return (
            
			<div className="register">
				<form onSubmit={this.displayLogin}>
					<h2>Реєстрація</h2>

					<div className="name">
						<input
							type="text"
							placeholder="Повне імя"
							name="fullname"
							value={this.state.fullname}
							onChange={this.update}
						/>
					</div>

					<div className="email">
						<input
							type="text"
							placeholder="Введіть ваш email"
							name="email"
							value={this.state.email}
							onChange={this.update}
						/>
					</div>

					<div className="pasword">
						<input
							type="password"
							placeholder="Пароль"
							name="password"
							value={this.state.password}
							onChange={this.update}
						/>
                        
					</div>

					<div className="password">
						<input type="password" placeholder="Повторіть пароль" name="password1" />
					</div>
                    
					<button id="button-reg-log" type="submit" value="Login">Зареєструватись</button>
                    
				</form>

				<Link to="/login">Маю вже акаунт!</Link>
                <p>{this.saveData}</p>
			</div>
		);
	}
}


export default Register;
