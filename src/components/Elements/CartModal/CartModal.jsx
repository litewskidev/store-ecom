import { NavLink } from 'react-router-dom';
import './CartModal.scss';

const CartModal = ({ handleBtn }) => {
  const cart = [];

  return(
    <div id='cart-modal'>
      <div className='cartModal__wrapper'>
        <div className='cartModal__header'>
          <NavLink to='/cart' onClick={handleBtn}>YOUR CART</NavLink>
          <button className='cartModal__header__button' onClick={handleBtn}>
            <div className='cartModal__header__button__up'></div>
            <div className='cartModal__header__button__down'></div>
          </button>
        </div>
        <div className='cartModal__bag'>
          <div className='cartModal__bag__items'>
            {(cart.length > 0) ? (
              cart.map((item, index) => (
                <div key={index}>
                  <p>{item}</p>
                </div>
              ))
            ) : (
              <div>
                <h1>Your cart is currently empty.</h1>
              </div>
            )}
          </div>
          <div className='cartModal__bag__images'>
            <h5>WHY NOT START SHOPPING HERE</h5>
            <div className='cartModal__bag__images__inner'>
              <div className='cartModal__bag__images__inner__img'>
                <img src={process.env.PUBLIC_URL + '/assets/images/img_1.webp'} alt='' />
                <div className='cartModal__bag__images__inner__img__link'>
                  <p></p>
                  <NavLink to='/categories/women-watches' onClick={handleBtn}>SHOP NOW</NavLink>
                </div>
              </div>
              <div className='cartModal__bag__images__inner__img'>
                <img src={process.env.PUBLIC_URL + '/assets/images/img_5.webp'} alt='' />
                <div className='cartModal__bag__images__inner__img__link'>
                  <p></p>
                  <NavLink to='/categories/men-watches' onClick={handleBtn}>SHOP NOW</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='cartModal__footer'>
          <div className='cartModal__footer__free'>
            <p>Spend $650 more for free delivery</p>
          </div>
          <div className='cartModal__footer__checkout'>
            <div className='cartModal__footer__checkout__total'>
              <h4>Subtotal (0) Items</h4>
              <h4>$0</h4>
            </div>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
