import { useCallback, useState } from 'react';
import './ProductTabs.scss';

const ProductTabs = ({ product }) => {
	const productMenu = {
		reference: {
			ref: 'REF',
			sku: 'SKU#',
		},
		cart: {
			button: 'ADD TO CART',
		},
		desc: {
			title: 'DESCRIPTION',
		},
		features: {
			title: 'FEATURES',
			first: {
				title: 'WATCH DETAILS',
				option_1: 'SKU',
				option_2: 'Reference Number',
				option_3: 'Year',
				option_4: 'Origin',
				option_5: 'Style',
				option_6: 'Gender',
			},
			second: {
				title: 'CASE & DIAL',
				option_1: 'Case Size',
				option_2: 'Case Material',
				option_3: 'Caseback',
				option_4: 'Case Shape',
				option_5: 'Dial Color',
				option_6: 'Hours Markers',
				option_7: 'Water Resistance',
			},
			third: {
				title: 'STRAP / BRACELET',
				option_1: 'Strap/Bracelet Material',
				option_2: 'Band Color',
				option_3: 'Buckle Type',
				option_4: 'Bracelet Length',
			},
			fourth: {
				title: 'FUNCTION',
				option_1: 'Movement',
				option_2: 'Complications',
			},
		},
		shipping: {
			title: 'SHIPPING & RETURN',
			info: [
				{
					title: 'SHIPPING METHODS',
					info: 'We offer several shipping methods to meet your delivery needs. The shipping options available for your order will be presented during the checkout process.',
				},
				{
					title: 'SHIPPING TIMES',
					info: 'Estimated delivery times vary depending on the shipping method chosen and your delivery address. You will receive a shipping confirmation email with tracking information once your order has been shipped.',
				},
				{
					title: 'INTERNATIONAL SHIPPING',
					info: 'We offer international shipping to select countries. International shipping costs and delivery times vary depending on the destination. Please note that additional customs duties and taxes may apply to international orders.',
				},
			],
		},
	};

	const [tabIndex, setTabIndex] = useState(1);

	const handleTabIndex = useCallback(index => {
		setTabIndex(index);
	}, []);

	return (
		<div className='productTabs__wrapper'>
			<div className='productTabs__header'>
				<div
					className={`productTabs__header__button ${tabIndex === 1 ? 'active' : ''}`}
					onClick={() => handleTabIndex(1)}>
					<h6>{productMenu.features.title}</h6>
				</div>
				<div
					className={`productTabs__header__button ${tabIndex === 2 ? 'active' : ''}`}
					onClick={() => handleTabIndex(2)}>
					<h6>{productMenu.shipping.title}</h6>
				</div>
			</div>
			<div className='productTabs__body'>
				<div
					className={`productTabs__body__tab ${tabIndex === 1 ? 'active' : ''}`}>
					<div className='productTabs__body__tab__features'>
						<div>
							<div className='features__details'>
								<h6 className='tab__title'>
									{productMenu.features.first.title}
								</h6>
								<div className='features__details__box'>
									<h6>{productMenu.features.first.option_1}:</h6>
									<p>{product?.sku}</p>
								</div>
								<div className='features__details__box'>
									<h6>{productMenu.features.first.option_2}:</h6>
									<p>{product?.reference}</p>
								</div>
								<div className='features__details__box'>
									<h6>{productMenu.features.first.option_3}:</h6>
									<p>{product?.year}</p>
								</div>
								<div className='features__details__box'>
									<h6>{productMenu.features.first.option_4}:</h6>
									<p>{product?.features.details.origin}</p>
								</div>
								<div className='features__details__box'>
									<h6>{productMenu.features.first.option_5}:</h6>
									{product?.features.details.style.map((style, index) => (
										<p key={index}>{style}</p>
									))}
								</div>
								<div className='features__details__box'>
									<h6>{productMenu.features.first.option_6}:</h6>
									<p>{product?.features.details.gender}</p>
								</div>
							</div>
						</div>
						<div>
							<div className='features__case'>
								<h6 className='tab__title'>
									{productMenu.features.second.title}
								</h6>
								<div className='features__case__box'>
									<h6>{productMenu.features.second.option_1}:</h6>
									<p>{product?.features.case.size}</p>
								</div>
								<div className='features__case__box'>
									<h6>{productMenu.features.second.option_2}:</h6>
									<p>{product?.features.case.material}</p>
								</div>
								<div className='features__case__box'>
									<h6>{productMenu.features.second.option_3}:</h6>
									<p>{product?.features.case.back}</p>
								</div>
								<div className='features__case__box'>
									<h6>{productMenu.features.second.option_4}:</h6>
									<p>{product?.features.case.shape}</p>
								</div>
								<div className='features__case__box'>
									<h6>{productMenu.features.second.option_5}:</h6>
									<p>{product?.features.dial.color}</p>
								</div>
								<div className='features__case__box'>
									<h6>{productMenu.features.second.option_6}:</h6>
									<p>{product?.features.dial.hoursMarkers}</p>
								</div>
								<div className='features__case__box'>
									<h6>{productMenu.features.second.option_7}:</h6>
									<p>{product?.features.case.waterResistance}</p>
								</div>
							</div>
						</div>
						<div>
							<div className='features__strap'>
								<h6 className='tab__title'>
									{productMenu.features.third.title}
								</h6>
								<div className='features__strap__box'>
									<h6>{productMenu.features.third.option_1}:</h6>
									<p>{product?.features.strapBracelet.material}</p>
								</div>
								<div className='features__strap__box'>
									<h6>{productMenu.features.third.option_2}:</h6>
									<p>{product?.features.strapBracelet.bandColor}</p>
								</div>
								<div className='features__strap__box'>
									<h6>{productMenu.features.third.option_3}:</h6>
									<p>{product?.features.strapBracelet.buckleType}</p>
								</div>
								<div className='features__strap__box'>
									<h6>{productMenu.features.third.option_4}:</h6>
									<p>{product?.features.strapBracelet.length}</p>
								</div>
							</div>
						</div>
						<div>
							<div className='features__function'>
								<h6 className='tab__title'>
									{productMenu.features.fourth.title}
								</h6>
								<div className='features__function__box'>
									<h6>{productMenu.features.fourth.option_1}:</h6>
									<p>{product?.features.function.movement}</p>
								</div>
								<div className='features__function__box'>
									<h6>{productMenu.features.fourth.option_2}:</h6>
									{product?.features.function.complications.map(
										(complication, index) => (
											<p key={index}>{complication}</p>
										),
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className={`productTabs__body__tab ${tabIndex === 2 ? 'active' : ''}`}>
					<div className='shipping__info'>
						{productMenu.shipping.info.map((info, index) => (
							<div className='shipping__info__tab' key={index}>
								<h6>{info.title}</h6>
								<p>{info.info}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductTabs;
