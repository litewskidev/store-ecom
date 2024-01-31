import { useMemo } from 'react';
import { useGetAllProductsQuery } from '../../../redux/slices/productsApiSlice.js';
import ProductsList from '../../Elements/ProductsList/ProductsList.jsx';

const AllProducts = () => {

  //  FETCH DATA
  const { data: allProducts, isLoading, isError } = useGetAllProductsQuery();

  const pageMenu = useMemo(() => (
    {
      allProducts: {
        title: 'ALL WATCHES'
      }
    }
  ), []);

  return(
    <section id='all-products'>
      <ProductsList title={pageMenu.allProducts.title} products={allProducts} loading={isLoading} error={isError} />
    </section>
  );
};

export default AllProducts;
