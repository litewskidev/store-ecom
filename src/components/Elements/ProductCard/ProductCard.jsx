import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
	return (
		<div className='productCard__box'>
			<NavLink
				to={`/watches/${product?._id}`}
				className='productCard__box__inner'>
				<div className='productCard__box__inner__image'>
					{product?.images.slice(0, 1).map((image, index) => (
						<div className='product__images' key={index}>
							<img
								src={
									process.env.PUBLIC_URL +
									`/assets/images/watches/${product?.sku}/${image}.webp`
								}
								alt=''
							/>
						</div>
					))}
				</div>
				<div className='productCard__box__inner__info__container'>
					<div className='productCard__box__inner__info'>
						<div className='productCard__box__inner__info__title'>
							<p>
								{product?.brand.name}, {product?.model}
							</p>
						</div>
						{product?.price.discount !== 0 ? (
							<div className='productCard__box__inner__info__price'>
								<p>
									{product?.price.currency}
									{(
										product?.price.base -
										product?.price.base / product?.price.discount
									).toFixed(3)}
								</p>
							</div>
						) : (
							<div className='productCard__box__inner__info__price'>
								<p>
									{product?.price.currency}
									{(product?.price.base).toFixed(3)}
								</p>
							</div>
						)}
					</div>
				</div>
        <div className='productCard__box__inner__info__button'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/clock.svg'} alt='wishlist button'/>
            <img src={process.env.PUBLIC_URL + '/assets/icons/share.svg'} alt='share button'/>
          </div>
			</NavLink>
		</div>
	);
};

export default ProductCard;

ProductCard.propTypes = {
	product: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(PropTypes.string).isRequired,
		sku: PropTypes.string.isRequired,
		price: PropTypes.shape({
			currency: PropTypes.string.isRequired,
			base: PropTypes.number.isRequired,
			discount: PropTypes.number.isRequired,
		}).isRequired,
		year: PropTypes.number.isRequired,
		brand: PropTypes.shape({
			name: PropTypes.string.isRequired,
		}).isRequired,
		model: PropTypes.string.isRequired,
	}).isRequired,
};
