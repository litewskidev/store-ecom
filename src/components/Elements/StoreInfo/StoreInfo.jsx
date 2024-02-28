import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Container from '../Container/Container.jsx';
import './StoreInfo.scss';

const StoreInfo = ({ store }) => {
	const location = useLocation();

	//  GSAP
	const storeRef = useRef(null);
	useGSAP(() => {
		gsap.fromTo(
			storeRef.current,
			{ opacity: 0, y: '1%' },
			{ opacity: 1, y: 0, duration: 0.5, ease: 'sine.out', force3D: true },
		);
	}, [location]);

	const storeMenu = {
		action: 'GET DIRECTIONS',
	};

	return (
		<div className='storeInfo__wrapper' ref={storeRef}>
			<Container>
				<div className='storeInfo__header'>
					<img
						src={
							process.env.PUBLIC_URL +
							`/assets/images/stores/${store.id}/${store.id}_1.webp`
						}
						alt={`${store.city} store`}
					/>
					<div className='storeInfo__header__title'>
						<h1>{store.city}</h1>
					</div>
				</div>
				<div className='storeInfo__body'>
					<div className='storeInfo__body__address'>
						<p>{store.contact.address}</p>
						<p>{store.contact.phoneNumber}</p>
						<div className='storeInfo__body__address__button'>
							<button>
								<a
									target='_blank'
									rel='noreferrer'
									href={`${store.contact.href}`}>
									{storeMenu.action}
								</a>
							</button>
						</div>
						<p>{store.contact.openHours}</p>
						<a href={`mailto:${store.contact.email}`}>{store.contact.email}</a>
					</div>
					<div className='storeInfo__body__info'>
						{store.info.map((article, index) => (
							<div className='storeInfo__body__info__article' key={index}>
								<p>{article}</p>
							</div>
						))}
					</div>
				</div>
				<div className='storeInfo__footer'>
					<div className='storeInfo__footer__info'>
						<div className='storeInfo__footer__info__inner'>
							<h3>{store.details}</h3>
						</div>
					</div>
					<div className='storeInfo__footer__image'>
						<img
							src={
								process.env.PUBLIC_URL +
								`/assets/images/stores/${store.id}/${store.id}_2.webp`
							}
							alt={`inside of ${store.city} store`}
						/>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default StoreInfo;
