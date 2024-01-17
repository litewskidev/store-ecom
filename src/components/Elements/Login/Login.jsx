import './Login.scss';

const Login = ({ handleBtn }) => {
  return(
    <section id='login'>
      <div className='login__wrapper'>
        <div className='login__test__btn' onClick={handleBtn}>X</div>
        <h1>LOGIN</h1>
      </div>
    </section>
  );
};

export default Login;
