import './Product.scss';

const Product = ({ product }) => {
  return(
    <div className='product__wrapper'>
      <h1>PRODUCT</h1>
        <div>
          <h1>{product?.model}</h1>
          <p>{product?.description}</p>
        </div>
    </div>
  );
};

export default Product;
