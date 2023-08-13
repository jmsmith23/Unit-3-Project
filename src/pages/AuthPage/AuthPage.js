import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser }) {
	const [showLogin, setShowLogin] = useState(true);

	return (
		<div className="AuthPage">
			<main className={styles.AuthPage}>
				{showLogin ? (
					<LoginForm setUser={setUser} />
				) : (
					<SignUpForm setUser={setUser} />
				)}
				<div className="memberText mb-3">
					<p>Not a member yet?</p>
				</div>
				<div>
					<button
						className="btn-lg signUpLoginToggleBtn"
						onClick={() => setShowLogin(!showLogin)}
					>
						{showLogin ? 'SIGN UP' : 'LOG IN'}
					</button>
				</div>
			</main>
		</div>
	);
}
