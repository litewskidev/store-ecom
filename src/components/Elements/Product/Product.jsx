import { memo } from 'react';
import './Product.scss';

const Product = memo(({ product }) => {
  return(
    <div className='product__wrapper'>
      <div>
        <h1>{product?.brand}</h1>
        <h3>{product?.model}</h3>
        <p>{product?.description}</p>
      </div>
    </div>
  );
});

export default Product;
