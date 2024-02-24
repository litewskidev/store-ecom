import { useGetProductsByStyleQuery } from '../../../redux/slices/productsApiSlice.js';
import Loading from '../Loading/Loading.jsx';
import Error from '../Error/Error.jsx';
import ProductsSlider from '../ProductsSlider/ProductsSlider.jsx';
import './ProductSimilar.scss';

const ProductSimilar = ({ product }) => {
	//  FETCH DATA
	const {
		data: products,
		isLoading,
		isError,
	} = useGetProductsByStyleQuery(product.features.details.style[0]);

	return (
		<div className='productSimilar__wrapper'>
			<h4>YOU MAY ALSO LIKE</h4>
			{isLoading && <Loading />}
			{isError && (
				<Error>
					{isError.name && isError.name === 'NetworkError'
						? 'Network error. Please check your internet connection and try again.'
						: 'An unexpected error occurred. Please try again later.'}
				</Error>
			)}
			{!isLoading && !isError && <ProductsSlider products={products} />}
		</div>
	);
};

export default ProductSimilar;
