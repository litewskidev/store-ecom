import { NavLink } from 'react-router-dom';

const Register = ({ closeModal, toggleModal }) => {
	return (
		<>
			<div className='loginModal__nav'>
				<div className='loginModal__nav__header'>
					<h2>CREATE ACCOUNT</h2>
					<div className='loginModal__nav__header__button' onClick={closeModal}>
						<img
							src={process.env.PUBLIC_URL + '/assets/icons/close.svg'}
							alt='close button'
						/>
					</div>
				</div>
				<div className='loginModal__nav__scroll'>
					<form className='loginModal__nav__form'>
						<input type='text' placeholder='First name*'></input>
						<input type='text' placeholder='Last name*'></input>
						<input type='email' placeholder='Email address*'></input>
						<input type='password' placeholder='Password*'></input>
						<button type='submit'>SIGN UP</button>
					</form>
					<div className='loginModal__nav__footer'>
						<p>
							Create a CULTURE account and take advantage of these benefits:
						</p>
						<div className='loginModal__nav__footer__list'>
							<p>&#8226; Track your orders & order history</p>
							<p>&#8226; Create & share multiple wishlist boards</p>
							<p>&#8226; Receive 10% off when signed up to email</p>
						</div>
						<p>
							Already have an account?{' '}
							<NavLink to='/login' onClick={closeModal}>
								Login here
							</NavLink>
						</p>
						<button onClick={toggleModal}>LOGIN</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
