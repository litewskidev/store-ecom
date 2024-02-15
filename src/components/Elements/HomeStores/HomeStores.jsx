import { useCallback, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './HomeStores.scss';

const HomeStores = () => {
	const [currentStoreImage, setCurrentStoreImage] = useState('new-york');
	const [currentStoreHref, setCurrentStoreHref] = useState('/stores/new-york');

	const homeStoresMenu = useMemo(
		() => ({
			title: 'VISIT OUR STORES',
			action: 'EXPLORE',
			stores: [
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
				}
			],
		}),
		[],
	);

	const handleCurrentStore = useCallback((image, href) => {
		setCurrentStoreImage(image);
		setCurrentStoreHref(href);
	}, []);

	return (
		<div className='homeStores__wrapper'>
			<div className='homeStores__title'>
				<h5>{homeStoresMenu.title}</h5>
			</div>
			<div className='homeStores__inner'>
				<div className='homeStores__info'>
					<div className='homeStores__info__stores'>
						{homeStoresMenu.stores.map((store, index) => (
							<div
								className='homeStores__info__stores__box'
								key={index}
								onClick={() => handleCurrentStore(store.image, store.href)}>
								<p>{store.city}</p>
							</div>
						))}
					</div>
				</div>
				<div className='homeStores__image'>
					<img
						src={
							process.env.PUBLIC_URL +
							`/assets/images/stores/${currentStoreImage}.webp`
						}
						alt={`${currentStoreImage} store`}
					/>
					<div className='homeStores__image__action'>
						<NavLink to={currentStoreHref}>
							<p>{homeStoresMenu.action}</p>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeStores;
