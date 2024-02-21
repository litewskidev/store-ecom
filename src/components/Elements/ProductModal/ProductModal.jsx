import { useCallback } from 'react';
import PropTypes from 'prop-types';
import './ProductModal.scss';

const ProductModal = ({
	imagesList,
	currentIndex,
	setCurrentIndex,
	currentImage,
	setCurrentImage,
	currentProduct,
	toggleProductModal,
}) => {
	//  BUTTONS HANDLERS
	const handlePrevImage = useCallback(() => {
		const prevIndex =
			(currentIndex - 1 + imagesList.length) % imagesList.length;
		setCurrentImage(imagesList[prevIndex]);
		setCurrentIndex(prevIndex);
	}, [currentIndex, setCurrentImage, setCurrentIndex, imagesList]);

	const handleNextImage = useCallback(() => {
		const nextIndex = (currentIndex + 1) % imagesList.length;
		setCurrentImage(imagesList[nextIndex]);
		setCurrentIndex(nextIndex);
	}, [currentIndex, setCurrentImage, setCurrentIndex, imagesList]);

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
			<nav className='productModal__navigation'>
				<div
					className='productModal__navigation__button'
					onClick={handlePrevImage}>
					<img
						src={process.env.PUBLIC_URL + `/assets/icons/arrow-prev.svg`}
						alt=''
					/>
				</div>
				<div
					className='productModal__navigation__button'
					onClick={handleNextImage}>
					<img
						src={process.env.PUBLIC_URL + `/assets/icons/arrow-next.svg`}
						alt=''
					/>
				</div>
				<div
					className='productModal__navigation__button'
					onClick={toggleProductModal}>
					<img
						src={process.env.PUBLIC_URL + `/assets/icons/close.svg`}
						alt=''
					/>
				</div>
			</nav>
		</div>
	);
};

export default ProductModal;

ProductModal.propTypes = {
	imagesList: PropTypes.array.isRequired,
	currentIndex: PropTypes.number.isRequired,
	setCurrentIndex: PropTypes.func.isRequired,
	currentImage: PropTypes.string.isRequired,
	setCurrentImage: PropTypes.func.isRequired,
	currentProduct: PropTypes.string.isRequired,
	toggleProductModal: PropTypes.func.isRequired,
};
