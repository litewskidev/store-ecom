import { useParams } from 'react-router-dom';
import Products from '../../Elements/Products/Products.jsx';
import { useGetProductsByCategoryQuery } from '../../../redux/slices/productsApiSlice.js';
import './CategoryList.scss';

const CategoryList = () => {
  const params = useParams();
  const query = params.id;
  const { data: categoryProducts, isLoading } = useGetProductsByCategoryQuery(query);

  return(
    <section id='category-list'>
      <div className='categorylist__wrapper'>
        <h1>CATEGORY LIST</h1>
        {isLoading && <div><p>LOADING...</p></div>}
        <Products products={categoryProducts}/>
      </div>
    </section>
  );
};

export default CategoryList;
