import { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './HomeStores.scss';

const HomeStores = () => {
	const homeStoresMenu = {
		title: 'VISIT OUR STORES',
		action: 'EXPLORE',
		list: [
			{
				id: 'new-york',
				city: 'NEW YORK',
			},
			{
				id: 'london',
				city: 'LONDON',
			},
			{
				id: 'tokyo',
				city: 'TOKYO',
			},
			{
				id: 'paris',
				city: 'PARIS',
			},
			{
				id: 'rome',
				city: 'ROME',
			},
		],
	};
	const homeStoresList = homeStoresMenu.list;

	const [currentStoreIndex, setCurrentStoreIndex] = useState(0);

	const handleCurrentStore = useCallback(index => {
		setCurrentStoreIndex(index);
	}, []);

	const currentStore = homeStoresList[currentStoreIndex];

	return (
		<div className='homeStores__wrapper'>
			<div className='homeStores__title'>
				<h4>{homeStoresMenu.title}</h4>
			</div>
			<div className='homeStores__inner'>
				<div className='homeStores__info'>
					<div className='homeStores__info__stores'>
						{homeStoresList.map((store, index) => (
							<div
								className={`homeStores__info__stores__box ${currentStoreIndex === index ? 'box-active' : ''}`}
								key={index}
								onClick={() => handleCurrentStore(index)}>
								<p>{store.city}</p>
								<div
									className={`homeStores__info__stores__box__icon ${currentStoreIndex === index ? 'icon-active' : ''}`}>
									<img
										src={
											process.env.PUBLIC_URL + '/assets/icons/arrow-right.svg'
										}
										alt='arrow right icon'
									/>
								</div>
							</div>
						))}
					</div>
					<div className='homeStores__info__link'>
						<NavLink to={`/stores/${currentStore.id}`}>
							<p>{homeStoresMenu.action}</p>
						</NavLink>
					</div>
				</div>
				<div className='homeStores__image'>
					<img
						src={
							process.env.PUBLIC_URL +
							`/assets/images/stores/${currentStore.id}/${currentStore.id}_1.webp`
						}
						alt={`${currentStore.city} store`}
					/>
				</div>
			</div>
		</div>
	);
};

export default HomeStores;
