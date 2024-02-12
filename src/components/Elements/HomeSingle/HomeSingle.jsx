import { useMemo } from 'react';
import { useGetProductsByIdQuery } from '../../../redux/slices/productsApiSlice.js';
import './HomeSingle.scss';

const HomeSingle = () => {
	const homeSingleMenu = useMemo(
		() => ({
			id: '65b985bc022ceaef9eae5d20',
			desc: '',
			action: '',
		}),
		[],
	);
	//  FETCH DATA
	const {
		data: product,
		isLoading,
		isError,
	} = useGetProductsByIdQuery(homeSingleMenu.id);
	return <div></div>;
};

export default HomeSingle;
