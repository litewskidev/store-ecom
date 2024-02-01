import { NavLink } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  return(
    <div className='productCard__box'>
      <NavLink to={`/watches/${product._id}`} className='productCard__box__inner'>
        <div className='productCard__box__inner__image'>
          {product.images.slice(0, 1).map((image, index) => (
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
          <p>{product.year}</p>
        </div>
        <div className='productCard__box__inner__title'>
          <h1>{product?.brand.name}</h1>
          <h2>{product.model}</h2>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductCard;
