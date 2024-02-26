import './StoreInfo.scss';

const StoreInfo = ({ store }) => {
	const storeMenu = {
		action: 'GET DIRECTIONS',
	};

	return (
		<div className='storeInfo__wrapper'>
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
					<button>
						<a target='_blank' rel='noreferrer' href={`${store.contact.href}`}>
							{storeMenu.action}
						</a>
					</button>
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
					<h2>{store.details}</h2>
				</div>
				<div className='storeInfo__footer__image'>
					<img
						src={
							process.env.PUBLIC_URL +
							`/assets/images/stores/${store.city}/${store.city}_2.webp`
						}
						alt={`inside of ${store.city} store`}
					/>
				</div>
			</div>
		</div>
	);
};

export default StoreInfo;
