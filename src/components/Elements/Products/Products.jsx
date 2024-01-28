import { memo } from 'react';
import { NavLink } from 'react-router-dom';
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

export default Products;
