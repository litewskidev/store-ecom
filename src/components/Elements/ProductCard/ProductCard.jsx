import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  return(
    <div className='productCard__box'>
      <NavLink to={`/watches/${product?._id}`} className='productCard__box__inner'>
        <div className='productCard__box__inner__image'>
          {product?.images.slice(0, 1).map((image, index) => (
            <div className='product__images' key={index}>
              <img src={process.env.PUBLIC_URL + `/assets/images/watches/${product?.sku}/${image}.webp`} alt='' />
            </div>
          ))}
        </div>
        <div className='productCard__box__inner__info'>
          {(product?.price.discount !== 0) ? (
            <div>
              <p>{product?.price.currency}{(product?.price.base - (product?.price.base / product?.price.discount)).toFixed(3)}</p>
            </div>
          ) : (
            <div>
              <p>{product?.price.currency}{(product?.price.base).toFixed(3)}</p>
            </div>
          )}
          <p>{product?.year}</p>
        </div>
        <div className='productCard__box__inner__title'>
          <h1>{product?.brand.name}</h1>
          <h2>{product?.model}</h2>
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
