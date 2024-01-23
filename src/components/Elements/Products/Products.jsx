import { NavLink } from 'react-router-dom';
import './Products.scss';

const Products = ({ products }) => {
  return(
    <div className='products__wrapper'>
      {products?.map((product, index) => (
        <div key={product._id}>
          <NavLink to={`/watches/${product._id}`}>
            <h1>{product.brand}</h1>
            <h3>{product.model}</h3>
            <p>{product.description}</p>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Products;
