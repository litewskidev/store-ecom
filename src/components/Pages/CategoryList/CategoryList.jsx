import { useParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../../redux/slices/productsApiSlice.js';
import Products from '../../Elements/Products/Products.jsx';
import Loading from '../../Elements/Loading/Loading.jsx';
import './CategoryList.scss';

const CategoryList = () => {
  const params = useParams();
  const category = params.id;
  const { data: categoryProducts, isLoading, isError, error } = useGetProductsByCategoryQuery(category);

  console.log(categoryProducts);

  return(
    <section id='category-list'>
      <div className='categoryList__wrapper'>
        <h1>{category.replace('-', ' ').toUpperCase()}</h1>
        {isLoading && <Loading />}
        <Products products={categoryProducts}/>
      </div>
    </section>
  );
};

export default CategoryList;
