import { NavLink } from 'react-router-dom';
import './Products.scss';

const Products = ({ products }) => {
  return(
    <div className='products__wrapper'>
      {products?.map((product, index) => (
        <div className='products__item' key={product._id}>
          <NavLink to={`/watches/${product._id}`}>
            <h2>{product.brand}</h2>
            <h3>{product.model}</h3>
            <p>{product.description}</p>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Products;
