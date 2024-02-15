import { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './HomeStores.scss';

const HomeStores = () => {
	const homeStoresMenu = {
		title: 'VISIT OUR STORES',
		action: 'EXPLORE',
		list: [
			{
				city: 'NEW YORK',
				href: '/stores/new-york',
				image: 'new-york',
			},
			{
				city: 'LONDON',
				href: '/stores/london',
				image: 'london',
			},
			{
				city: 'TOKYO',
				href: '/stores/tokyo',
				image: 'tokyo',
			},
			{
				city: 'PARIS',
				href: '/stores/paris',
				image: 'paris',
			},
			{
				city: 'ROME',
				href: '/stores/rome',
				image: 'rome',
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
						<NavLink to={currentStore.href}>
							<p>{homeStoresMenu.action}</p>
						</NavLink>
					</div>
				</div>
				<div className='homeStores__image'>
					<img
						src={
							process.env.PUBLIC_URL +
							`/assets/images/stores/${currentStoreIndex + 1}.webp`
						}
						alt={`${currentStore.city} store`}
					/>
				</div>
			</div>
		</div>
	);
};

export default HomeStores;
