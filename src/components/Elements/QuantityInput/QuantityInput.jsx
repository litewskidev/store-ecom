import './QuantityInput.scss';

const QuantityInput = ({ quantity, increment, decrement }) => {
	return (
		<div className='quantity__wrapper'>
			<div className='quantity__input' onClick={decrement}>
				<img
					src={process.env.PUBLIC_URL + '/assets/icons/minus.svg'}
					alt='minus icon'
				/>
			</div>
			<div className='quantity__view'>
				<p>{quantity}</p>
			</div>
			<div className='quantity__input' onClick={increment}>
				<img
					src={process.env.PUBLIC_URL + '/assets/icons/plus.svg'}
					alt='plus icon'
				/>
			</div>
		</div>
	);
};

export default QuantityInput;
