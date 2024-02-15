import { useGetAllProductsQuery } from '../../../redux/slices/productsApiSlice.js';
import ProductsList from '../../Elements/ProductsList/ProductsList.jsx';

const ProductAll = () => {
	const productAllMenu = {
		allProducts: {
			title: 'ALL WATCHES',
		},
	};

	//  FETCH DATA
	const { data: allProducts, isLoading, isError } = useGetAllProductsQuery();

	return (
		<section id='product-all'>
			<ProductsList
				title={productAllMenu.allProducts.title}
				products={allProducts}
				loading={isLoading}
				error={isError}
			/>
		</section>
	);
};

export default ProductAll;
