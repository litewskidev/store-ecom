import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../../redux/slices/productsApiSlice.js';
import Loading from '../../Elements/Loading/Loading.jsx';
import Products from '../../Elements/Products/Products.jsx';
import './CategoryList.scss';

const CategoryList = () => {
  const params = useParams();
  const navigate = useNavigate();

  const category = params.id;
  const { data: categoryProducts, isLoading, isError } = useGetProductsByCategoryQuery(category);

  return(
    <section id='category-list'>
      <div className='categoryList__wrapper'>
        <h1>{category.replace('-', ' ').toUpperCase()}</h1>
        {isLoading && <Loading />}
        {isError && navigate('*')}
        {!isLoading && !isError && <Products products={categoryProducts} />}
      </div>
    </section>
  );
};

export default CategoryList;
