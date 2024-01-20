import './Newsletter.scss';

const Newsletter = () => {
  return(
    <div className='newsletter__wrapper'>
      <div className='newsletter__left'>
        <div className='newsletter__left__header'>
          <h1>Join the CULTURE</h1>
          <p>Immerse yourself in a captivating world of horological charm and magic.</p>
        </div>
        <div className='newsletter__left__footer'>
          <div className='newsletter__left__footer__title'>
            <h3>Newsletter</h3>
            <p>Sign up for our newsletter and enjoy collection previews, new arrivals, events and other exclusive offers.</p>
          </div>
          <form className='newsletter__left__footer__form'>
            <input type='email' placeholder='Enter your email address*'></input>
            <button>SIGN UP</button>
          </form>
        </div>
      </div>
      <div className='newsletter__right'>
        <img src={process.env.PUBLIC_URL + '/assets/images/img_13.webp'} alt='' />
      </div>
    </div>
  );
};

export default Newsletter;
