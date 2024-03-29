import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CartModal.scss';

const CartModal = ({ closeCart }) => {
	const cart = [];

	return (
		<div id='cart-modal'>
			<div className='cartModal__wrapper'>
				<div className='cartModal__header'>
					<NavLink to='/cart' onClick={closeCart}>
						YOUR CART
					</NavLink>
					<div className='cartModal__header__button' onClick={closeCart}>
						<img
							src={process.env.PUBLIC_URL + '/assets/icons/close.svg'}
							alt='close button'
						/>
					</div>
				</div>
				<div className='cartModal__bag'>
					<div className='cartModal__bag__items'>
						{cart.length > 0 ? (
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
						<h6>WHY NOT START SHOPPING HERE</h6>
						<div className='cartModal__bag__images__inner'>
							<div className='cartModal__bag__images__inner__img'>
								<img
									src={process.env.PUBLIC_URL + '/assets/images/img_1.webp'}
									alt=''
								/>
								<div className='cartModal__bag__images__inner__img__link'>
									<p></p>
									<NavLink to='/categories/women-watches' onClick={closeCart}>
										SHOP NOW
									</NavLink>
								</div>
							</div>
							<div className='cartModal__bag__images__inner__img'>
								<img
									src={process.env.PUBLIC_URL + '/assets/images/img_5.webp'}
									alt=''
								/>
								<div className='cartModal__bag__images__inner__img__link'>
									<p></p>
									<NavLink to='/categories/men-watches' onClick={closeCart}>
										SHOP NOW
									</NavLink>
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

CartModal.propTypes = {
	closeCart: PropTypes.func.isRequired,
};

export default CartModal;
