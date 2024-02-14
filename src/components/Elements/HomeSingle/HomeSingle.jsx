import { useGetProductsByIdQuery } from '../../../redux/slices/productsApiSlice.js';
import Loading from '../Loading/Loading.jsx';
import Error from '../Error/Error.jsx';
import ProductCard from '../ProductCard/ProductCard.jsx';
import './HomeSingle.scss';

const HomeSingle = () => {
	//  FETCH DATA
	const {
		data: product,
		isLoading,
		isError,
	} = useGetProductsByIdQuery('65b98461022ceaef9eae5d1b');
	const {
		data: product_2,
		isLoading_2,
		isError_2,
	} = useGetProductsByIdQuery('65b72a22401c069a89d84092');

	return (
		<div className='homeSingle__wrapper'>
			<div className='homeSingle__image'>
				{isLoading && <Loading />}
				{isError && (
					<Error>
						{isError.name && isError.name === 'NetworkError'
							? 'Network error. Please check your internet connection and try again.'
							: 'An unexpected error occurred. Please try again later.'}
					</Error>
				)}
				{!isLoading && !isError && <ProductCard product={product} />}
			</div>
			<div className='homeSingle__image'>
				{isLoading_2 && <Loading />}
				{isError_2 && (
					<Error>
						{isError_2.name && isError_2.name === 'NetworkError'
							? 'Network error. Please check your internet connection and try again.'
							: 'An unexpected error occurred. Please try again later.'}
					</Error>
				)}
				{!isLoading_2 && !isError_2 && <ProductCard product={product_2} />}
			</div>
		</div>
	);
};

export default HomeSingle;
