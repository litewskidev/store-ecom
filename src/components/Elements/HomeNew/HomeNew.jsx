import { NavLink } from 'react-router-dom';
import { useGetNewProductsQuery } from '../../../redux/slices/productsApiSlice.js';
import Loading from '../Loading/Loading.jsx';
import Error from '../Error/Error.jsx';
import ProductsSlider from '../ProductsSlider/ProductsSlider.jsx';
import './HomeNew.scss';

const HomeNew = () => {
	const homeNewMenu = {
		title: 'NEW ARRIVALS',
		action: 'VIEW ALL',
		href: '/categories/new-arrivals',
	};

	//  FETCH DATA
	const { data: newProducts, isLoading, isError } = useGetNewProductsQuery();

	return (
		<div className='homeNew__wrapper'>
			<div className='homeNew__title'>
				<h4>{homeNewMenu.title}</h4>
				<p>&#183;</p>
				<NavLink to={homeNewMenu.href}>{homeNewMenu.action}</NavLink>
			</div>
			{isLoading && <Loading />}
			{isError && (
				<Error>
					{isError.name && isError.name === 'NetworkError'
						? 'Network error. Please check your internet connection and try again.'
						: 'An unexpected error occurred. Please try again later.'}
				</Error>
			)}
			{!isLoading && !isError && <ProductsSlider products={newProducts} />}
		</div>
	);
};

export default HomeNew;
