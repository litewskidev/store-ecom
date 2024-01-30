import { memo } from 'react';
import { useLayoutEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import './Products.scss';

const Products = memo(({ products }) => {

  //  GSAP
  const productsListRef = useRef(null);
  useLayoutEffect(() => {
    gsap.fromTo(".products__box", { opacity: 0, x: '-2%'}, { opacity: 1, x: 0, duration: .5, ease: "sine.out",
      stagger: {
        each: .25,
      },
      force3D: true,
    });
  }, []);

  return(
    <div className='products__wrapper' ref={productsListRef}>
      {products?.map((product, index) => (
        <div className='products__box' key={index}>
          <NavLink to={`/watches/${product._id}`} className='products__box__inner'>
            <div className='products__box__inner__image'>
              {product.images.slice(0, 1).map((image, index) => (
                <div className='product__images' key={index}>
                  <img src={process.env.PUBLIC_URL + `/assets/images/watches/${product?.sku}/${image}.webp`} alt='' />
                </div>
              ))}
            </div>
            <div className='products__box__inner__info'>
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
            <div className='products__box__inner__title'>
              <h1>{product?.brand.name}</h1>
              <h2>{product.model}</h2>
            </div>
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
