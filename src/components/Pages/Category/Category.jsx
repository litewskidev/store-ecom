import { useParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../../redux/slices/productsApiSlice.js';
import ProductsList from '../../Elements/ProductsList/ProductsList.jsx';

const Category = () => {
  const params = useParams();
  const category = params.id;

  //  FETCH DATA
  const { data: categoryProducts, isLoading, isError } = useGetProductsByCategoryQuery(category);

  return(
    <section id='category'>
      <ProductsList title={category} products={categoryProducts} loading={isLoading} error={isError} />
    </section>
  );
};

export default Category;
