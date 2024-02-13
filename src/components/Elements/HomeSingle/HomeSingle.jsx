import { useGetProductsByIdQuery } from '../../../redux/slices/productsApiSlice.js';
import './HomeSingle.scss';
import { NavLink } from 'react-router-dom';

const HomeSingle = ({ id, direction }) => {
	//  FETCH DATA
	const { data: product, isLoading, isError } = useGetProductsByIdQuery(id);

	return (
		<div className={`homeSingle__wrapper ${direction}`}>
			<div className='homeSingle__info'>
				<div className='homeSingle__info__inner'>
					<div className='homeSingle__info__inner__action'>
						<button>
							<NavLink to={product?.brand.href}>
								<h6>{product?.brand.name}</h6>
								<h6>{product?.model}</h6>
							</NavLink>
						</button>
					</div>
				</div>
			</div>
			<div className='homeSingle__image'>
				{product?.images.slice(0, 1).map((image, index) => (
					<NavLink to={product?.brand.href} key={index}>
						<img
							src={
								process.env.PUBLIC_URL +
								`/assets/images/watches/${product?.sku}/${image}.webp`
							}
							alt=''
						/>
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default HomeSingle;
