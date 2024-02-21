import './ProductModal.scss';

const ProductModal = ({ currentImage, currentProduct, toggleProductModal }) => {
	return (
		<div className='productModal__wrapper'>
			<div className='productModal__image'>
				<img
					src={
						process.env.PUBLIC_URL +
						`/assets/images/watches/${currentProduct}/${currentImage}.webp`
					}
					alt=''
				/>
			</div>
			<div className='productModal__button' onClick={toggleProductModal}>
				<img src={process.env.PUBLIC_URL + `/assets/icons/close.svg`} alt='' />
			</div>
		</div>
	);
};

export default ProductModal;
