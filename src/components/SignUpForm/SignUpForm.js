import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import styles from './SignUpForm.module.scss';

export default class SignUpForm extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		confirm: '',
		error: ''
	};

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value,
			error: ''
		});
	};

	handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			const formData = { ...this.state };
			delete formData.confirm;
			delete formData.error;
			// The promise returned by the signUp service method
			// will resolve to the user object included in the
			console.log(formData);
			// payload of the JSON Web Token (JWT)
			const user = await signUp(formData);
			// Baby step
			this.props.setUser(user);
		} catch {
			// An error happened on the server
			this.setState({ error: 'Sign Up Failed - Try Again' });
		}
	};

	// We must override the render method
	// The render method is the equivalent to a function-based component
	// (its job is to return the UI)
	render() {
		const disable = this.state.password !== this.state.confirm;
		return (
			<div>
				<div className={styles.formContainer}>
					<form
						className="signup card border-0"
						autoComplete="off"
						onSubmit={this.handleSubmit}
					>
						<label>Name</label>
						<input
							className="mb-2 pr-5"
							type="text"
							name="name"
							value={this.state.name}
							onChange={this.handleChange}
							required
						/>
						<label>Email</label>
						<input
							className="mb-2"
							type="email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
							required
						/>
						<label>Password</label>
						<input
							className="mb-2"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
							required
						/>
						<label>Confirm</label>
						<input
							type="password"
							name="confirm"
							value={this.state.confirm}
							onChange={this.handleChange}
							required
						/>
						<button className="signupBtn" type="submit" disabled={disable}>
							SIGN UP
						</button>
					</form>
				</div>
				<p className="error-message">&nbsp;{this.state.error}</p>
			</div>
		);
	}
}
