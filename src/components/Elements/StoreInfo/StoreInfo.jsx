import './StoreInfo.scss';

const StoreInfo = ({ store }) => {
	return (
		<div className='storeInfo__wrapper'>
			<div className='storeInfo__header'>
				<img
					src={
						process.env.PUBLIC_URL +
						`/assets/images/stores/${store.city}/${store.city}_1.webp`
					}
					alt={`${store.city} store`}
				/>
				<div className='storeInfo__header__title'>
					<h1>{store.city}</h1>
				</div>
			</div>
			<div className='storeInfo__body'>
				<div className='storeInfo__body__address'>
					<p>{store.address}</p>
				</div>
				<div className='storeInfo__body__info'>
					<p>{store.info}</p>
				</div>
			</div>
			<div className='storeInfo__footer'>
				<div className='storeInfo__footer__info'>
					<p>{store.details}</p>
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
