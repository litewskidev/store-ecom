import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Products.scss';

const Products = memo(({ products }) => {
  return(
    <div className='products__wrapper'>
      {products?.map((product, index) => (
        <div className='products__item' key={index}>
          <NavLink to={`/watches/${product._id}`}>
            <h2>{product.brand.name}</h2>
            <h3>{product.model}</h3>
            {product.images.slice(0, 1).map((image, index) => (
              <div className='product__images' key={index}>
                <img src={process.env.PUBLIC_URL + `/assets/images/watches/${product?.sku}/${image}.webp`} alt='' />
              </div>
            ))}
            <p>{product.price.currency}{(product?.price.base - (product.price.base / product?.price.discount)).toFixed(3)}</p>
            <p>{product.year}</p>
          </NavLink>
        </div>
      ))}
    </div>
  );
});

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      brand: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      model: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.shape({
        currency: PropTypes.string.isRequired,
        base: PropTypes.number.isRequired,
        discount: PropTypes.number.isRequired,
      }).isRequired,
      year: PropTypes.number.isRequired,
    })
  ),
};

export default Products;
