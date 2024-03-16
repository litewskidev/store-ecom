import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import useToggle from '../../../hooks/useToggle.js';
import PropTypes from 'prop-types';
import './LoginModal.scss';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';

const LoginModal = ({ closeModal }) => {
	//  BUTTONS HANDLERS
	const [registerPage, toggleModal] = useToggle(false);

	//  GSAP
	const aboutRef = useRef(null);
	useGSAP(() => {
		gsap.fromTo(
			'.loginModal__nav',
			{ opacity: 0, x: '2%' },
			{ opacity: 1, x: 0, duration: 0.5, ease: 'sine.out', force3D: true },
		);
	}, [registerPage]);

	return (
		<div id='login-modal'>
			<div className='loginModal__wrapper' ref={aboutRef}>
				{registerPage ? (
					<Register closeModal={closeModal} toggleModal={toggleModal} />
				) : (
					<Login closeModal={closeModal} toggleModal={toggleModal} />
				)}
			</div>
		</div>
	);
};

LoginModal.propTypes = {
	closeLogin: PropTypes.func.isRequired,
};

export default LoginModal;
