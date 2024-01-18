import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.scss';

const Login = ({ handleBtn }) => {
  const [registerPage, setRegisterPage] = useState(false);

  return(
    <section id='login'>
      <div className='login__wrapper'>
        {registerPage ? (
          <div className='login__nav'>
            <div className='login__nav__header'>
              <h2>CREATE ACCOUNT</h2>
              <div className='login__close' onClick={handleBtn}>X</div>
            </div>
            <form className='login__nav__form'>
              <input type='text' placeholder='First name*'></input>
              <input type='text' placeholder='Last name*'></input>
              <input type='email' placeholder='Email address*'></input>
              <input type='password' placeholder='Password*'></input>
              <button>SIGN UP</button>
            </form>
            <div className='login__nav__footer'>
              <p>Create a CULTURE account and take advantage of these benefits:</p>
              <div>
                <p>&#8226; Track your orders & order history</p>
                <p>&#8226; Create & share multiple wishlist boards</p>
                <p>&#8226; Receive 10% off when signed up to email</p>
              </div>
              <p>Already have an account? <NavLink to='/login' onClick={handleBtn}>Login here</NavLink></p>
              <button onClick={() => setRegisterPage(false)}>LOGIN</button>
            </div>
          </div>
        ) : (
          <div className='login__nav'>
            <div className='login__nav__header'>
              <h2>LOG IN</h2>
              <div className='login__close' onClick={handleBtn}>X</div>
            </div>
            <form className='login__nav__form'>
              <input type='email' placeholder='Email address*'></input>
              <input type='password' placeholder='Password*'></input>
              <button>LOGIN</button>
            </form>
            <div className='login__nav__footer'>
              <p>Don't have an account yet? <NavLink to='/register' onClick={handleBtn}>Sign up</NavLink> and take advantage of these benefits:</p>
              <div>
                <p>&#8226; Track your orders & order history</p>
                <p>&#8226; Create & share multiple wishlist boards</p>
                <p>&#8226; Receive 10% off when signed up to email</p>
              </div>
              <button onClick={() => setRegisterPage(true)}>CREATE AN ACCOUNT</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Login;
