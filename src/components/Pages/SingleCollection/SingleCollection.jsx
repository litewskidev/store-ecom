import { useParams } from 'react-router-dom';
import { useGetProductsByCollectionQuery } from '../../../redux/slices/productsApiSlice.js';
import ProductsList from '../../Elements/ProductsList/ProductsList.jsx';

const Collection = () => {
  const params = useParams();
  const collection = params.id;

  //  FETCH DATA
  const { data: collectionProducts, isLoading, isError } = useGetProductsByCollectionQuery(collection);

  return(
    <section id='single-collection'>
      <ProductsList title={collection} products={collectionProducts} loading={isLoading} error={isError} />
    </section>
  );
};

export default Collection;
