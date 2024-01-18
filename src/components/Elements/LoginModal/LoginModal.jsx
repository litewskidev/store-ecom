import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './LoginModal.scss';

const LoginModal = ({ handleBtn }) => {
  const [registerPage, setRegisterPage] = useState(false);

  return(
    <div id='login-modal'>
      <div className='loginModal__wrapper'>
        {registerPage ? (
          <div className='loginModal__nav'>
            <div className='loginModal__nav__header'>
              <h2>CREATE ACCOUNT</h2>
              <button className='loginModal__nav__header__button' onClick={handleBtn}>
                <div className='loginModal__nav__header__button__up'></div>
                <div className='loginModal__nav__header__button__down'></div>
              </button>
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
                <p>Create a CULTURE account and take advantage of these benefits:</p>
                <div className='loginModal__nav__footer__list'>
                  <p>&#8226; Track your orders & order history</p>
                  <p>&#8226; Create & share multiple wishlist boards</p>
                  <p>&#8226; Receive 10% off when signed up to email</p>
                </div>
                <p>Already have an account? <NavLink to='/login' onClick={handleBtn}>Login here</NavLink></p>
                <button onClick={() => setRegisterPage(false)}>LOGIN</button>
              </div>
            </div>
          </div>
        ) : (
          <div className='loginModal__nav'>
            <div className='loginModal__nav__header'>
              <h2>LOG IN</h2>
              <button className='loginModal__nav__header__button' onClick={handleBtn}>
                <div className='loginModal__nav__header__button__up'></div>
                <div className='loginModal__nav__header__button__down'></div>
              </button>
            </div>
            <form className='loginModal__nav__form'>
              <input type='email' placeholder='Email address*'></input>
              <input type='password' placeholder='Password*'></input>
              <button type='submit'>LOGIN</button>
            </form>
            <div className='loginModal__nav__footer'>
              <p>Don't have an account yet? <NavLink to='/register' onClick={handleBtn}>Sign up</NavLink> and take advantage of these benefits:</p>
              <div className='loginModal__nav__footer__list'>
                <p>&#8226; Track your orders & order history</p>
                <p>&#8226; Create & share multiple wishlist boards</p>
                <p>&#8226; Receive 10% off when signed up to email</p>
              </div>
              <button onClick={() => setRegisterPage(true)}>CREATE AN ACCOUNT</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
