import { useParams } from 'react-router-dom';
import Loading from '../../Elements/Loading/Loading.jsx';
import Error from '../../Elements/Error/Error.jsx';
import StoreInfo from '../../Elements/StoreInfo/StoreInfo.jsx';

const Store = () => {
	const params = useParams();
	const id = params.id;

	const { data: store, isLoading, isError } = useGetStoresByIdQuery(id);

	return (
		<section id='store'>
			<div className='store__wrapper'>
				{isLoading && <Loading />}
				{isError && (
					<Error>
						{isError.name && isError.name === 'NetworkError'
							? 'Network error. Please check your internet connection and try again.'
							: 'An unexpected error occurred. Please try again later.'}
					</Error>
				)}
				{!isLoading && !isError && <StoreInfo store={store} />}
			</div>
		</section>
	);
};

export default Store;
