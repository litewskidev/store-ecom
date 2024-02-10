import { useParams } from 'react-router-dom';
import { useGetProductsByCollectionQuery } from '../../../redux/slices/productsApiSlice.js';
import ProductsList from '../../Elements/ProductsList/ProductsList.jsx';

const CollectionSingle = () => {
	const params = useParams();
	const collection = params.id;

	//  FETCH DATA
	const {
		data: collectionProducts,
		isLoading,
		isError,
	} = useGetProductsByCollectionQuery(collection);

	return (
		<section id='collection-single'>
			<ProductsList
				title={collection}
				products={collectionProducts}
				loading={isLoading}
				error={isError}
			/>
		</section>
	);
};

export default CollectionSingle;
