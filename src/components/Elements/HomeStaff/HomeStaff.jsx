import { NavLink } from 'react-router-dom';
import { useGetAllProductsQuery } from '../../../redux/slices/productsApiSlice.js';
import Loading from '../Loading/Loading.jsx';
import Error from '../Error/Error.jsx';
import ProductsSlider from '../ProductsSlider/ProductsSlider.jsx';
import './HomeStaff.scss';

const HomeStaff = () => {
	const homeStaffMenu = {
		title: 'STAFF PICKS',
		action: 'VIEW ALL',
		href: '/categories/staff-picks',
	};

	//  FETCH DATA (FOR NOW !! CHANGE TO STAFF PICKS)
	const { data: staffProducts, isLoading, isError } = useGetAllProductsQuery();

	return (
		<div className='homeStaff__wrapper'>
			<div className='homeStaff__title'>
				<h4>{homeStaffMenu.title}</h4>
				<p>&#183;</p>
				<NavLink to={homeStaffMenu.href}>{homeStaffMenu.action}</NavLink>
			</div>
			{isLoading && <Loading />}
			{isError && (
				<Error>
					{isError.name && isError.name === 'NetworkError'
						? 'Network error. Please check your internet connection and try again.'
						: 'An unexpected error occurred. Please try again later.'}
				</Error>
			)}
			{!isLoading && !isError && <ProductsSlider products={staffProducts} />}
		</div>
	);
};

export default HomeStaff;
