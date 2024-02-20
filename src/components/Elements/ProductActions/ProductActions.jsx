import { useCallback, useState } from 'react';
import './ProductActions.scss';
import QuantityInput from '../QuantityInput/QuantityInput';

const ProductActions = ({ product }) => {
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
	};

	const [productQuantity, setProductQuantity] = useState(1);

	const handleIncrementProductQuantity = useCallback(() => {
		setProductQuantity(productQuantity + 1);
	}, [productQuantity]);

	const handleDecrementProductQuantity = useCallback(() => {
		if (productQuantity > 1) {
			setProductQuantity(productQuantity - 1);
		}
	}, [productQuantity]);

	return (
		<div className='productActions__wrapper'>
			<div className='productActions__title'>
				<h1>{product?.brand.name}</h1>
				<h3>{product?.model}</h3>
			</div>
			<div className='productActions__reference'>
				<p>
					{productMenu.reference.ref} {product?.reference}
				</p>
				<p>
					{productMenu.reference.sku}
					{product?.sku}
				</p>
			</div>
			<div className='productActions__price'>
				{product?.price.discount !== 0 ? (
					<>
						<h2>
							{product?.price.currency}
							{(
								product?.price.base -
								product?.price.base / product?.price.discount
							).toFixed(3)}
						</h2>
						<h3>
							{product?.price.currency}
							{(product?.price.base).toFixed(3)}
						</h3>
					</>
				) : (
					<h2>
						{product?.price.currency}
						{(product?.price.base).toFixed(3)}
					</h2>
				)}
			</div>
			<div className='productActions__actions'>
				<div className='productActions__actions__quantity'>
					<QuantityInput
						quantity={productQuantity}
						decrement={handleDecrementProductQuantity}
						increment={handleIncrementProductQuantity}
					/>
				</div>
				<div className='productActions__actions__buttons'>
					<button className='productActions__actions__buttons__cart'>
						{productMenu.cart.button}
					</button>
					<button className='productActions__actions__buttons__wishlist'>
						<img
							src={process.env.PUBLIC_URL + '/assets/icons/clock.svg'}
							alt='wishlist button'
						/>
					</button>
				</div>
			</div>
			<div className='productActions__description'>
				<h5>{productMenu.desc.title}</h5>
				<p>{product?.description}</p>
			</div>
		</div>
	);
};

export default ProductActions;
