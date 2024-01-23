import { NavLink } from 'react-router-dom';
import './Products.scss';

const Products = ({ products }) => {
  console.log(products);

  return(
    <div className='products__wrapper'>
      <h1>PRODUCTS</h1>
      {products?.map(product => (
        <NavLink to={`/watches/${product._id}`} key={product._id}>
          {product.model}
        </NavLink>
      ))}
    </div>
  );
};

export default Products;
