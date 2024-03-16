import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../../redux/slices/authApiSlice';
import { setCredentials } from '../../../redux/slices/authSlice';

const Login = ({ closeModal, toggleModal }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [loginUser] = useLoginUserMutation();

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const { accessToken } = await loginUser({ email, password }).unwrap();
			dispatch(setCredentials({ accessToken }));
			setEmail('');
			setPassword('');
      closeModal();
			navigate('/profile');
		} catch (err) {
			console.log(err.data?.message);
		}
	};

	return (
		<>
			<div className='loginModal__nav'>
				<div className='loginModal__nav__header'>
					<h2>LOG IN</h2>
					<div className='loginModal__nav__header__button' onClick={closeModal}>
						<img
							src={process.env.PUBLIC_URL + '/assets/icons/close.svg'}
							alt='close button'
						/>
					</div>
				</div>
				<div className='loginModal__nav__scroll'>
					<form className='loginModal__nav__form' onSubmit={handleSubmit}>
						<input
							type='email'
							placeholder='Email address*'
							value={email}
							onChange={e => setEmail(e.target.value)}
							autoComplete='off'
							required
						/>
						<input
							type='password'
							placeholder='Password*'
							value={password}
							onChange={e => setPassword(e.target.value)}
							autoComplete='off'
							required
						/>
						<button type='submit'>LOGIN</button>
					</form>
					<div className='loginModal__nav__footer'>
						<p>
							Don't have an account yet?{' '}
							<NavLink to='/register' onClick={closeModal}>
								Sign up
							</NavLink>{' '}
							and take advantage of these benefits:
						</p>
						<div className='loginModal__nav__footer__list'>
							<p>&#8226; Track your orders & order history</p>
							<p>&#8226; Create & share multiple wishlist boards</p>
							<p>&#8226; Receive 10% off when signed up to email</p>
						</div>
						<button onClick={toggleModal}>CREATE AN ACCOUNT</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
