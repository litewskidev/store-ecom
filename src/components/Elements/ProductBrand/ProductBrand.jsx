import { useGetBrandByIdQuery } from '../../../redux/slices/brandsApiSlice.js';
import Error from '../Error/Error.jsx';
import Loading from '../Loading/Loading.jsx';
import './ProductBrand.scss';

const ProductBrand = ({ product }) => {
	const brandId = product.brand.href;

	//  FETCH DATA
	const { data: brand, isLoading, isError } = useGetBrandByIdQuery(brandId);

	return (
		<div className='productBrand__wrapper'>
			{isLoading && <Loading />}
			{isError && (
				<Error>
					{isError.name && isError.name === 'NetworkError'
						? 'Network error. Please check your internet connection and try again.'
						: 'An unexpected error occurred. Please try again later.'}
				</Error>
			)}
			{!isLoading && !isError && (
				<div className='productBrand__inner'>
					<div className='productBrand__inner__info'>
						<div className='productBrand__inner__info__inner'>
							<h2>{brand.name}</h2>
							<p>{brand.info}</p>
						</div>
					</div>
					<div className='productBrand__inner__image'>
						<img
							src={
								process.env.PUBLIC_URL +
								`/assets/images/brands/${brandId}/${brandId}_1.webp`
							}
							alt={`${brand.name} watch`}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductBrand;
