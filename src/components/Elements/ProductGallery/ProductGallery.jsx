import { useCallback, useState } from 'react';
import useToggle from '../../../hooks/useToggle.js';
import ProductModal from '../ProductModal/ProductModal.jsx';
import './ProductGallery.scss';

const ProductGallery = ({ product }) => {
	//  STATES
	const [currentImage, setCurrentImage] = useState(product?.images[0]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isProductModalActive, toggleProductModal] = useToggle(false);

	//  CONSTANTS
	const currentProduct = product?.sku;
	const imagesList = product?.images;

	//  BUTTONS HANDLERS
	const handleCurrentImage = useCallback((image, index) => {
		setCurrentImage(image);
		setCurrentIndex(index);
	}, []);

	const handleProductModal = useCallback(
		(list, index) => {
			toggleProductModal();
		},
		[toggleProductModal],
	);

	return (
		<div className='productGallery__wrapper'>
			<div className='productGallery__list'>
				{imagesList.map((image, index) => (
					<div
						className={`productGallery__list__item ${currentImage === image ? 'active' : ''}`}
						key={index}
						onClick={() => handleCurrentImage(image, index)}>
						<img
							src={
								process.env.PUBLIC_URL +
								`/assets/images/watches/${currentProduct}/${image}.webp`
							}
							alt=''
						/>
					</div>
				))}
			</div>
			<div className='productGallery__show' onClick={handleProductModal}>
				<img
					src={
						process.env.PUBLIC_URL +
						`/assets/images/watches/${currentProduct}/${currentImage}.webp`
					}
					alt=''
				/>
				<div className='productGallery__show__loupe'>
					<img
						src={process.env.PUBLIC_URL + '/assets/icons/search.svg'}
						alt='loupe icon'
					/>
				</div>
			</div>
			<div
				className={`productGallery__productModal ${isProductModalActive ? 'active' : ''}`}
				onClick={toggleProductModal}>
				<div
					className={`productGallery__productModal__inner ${isProductModalActive ? 'open' : ''}`}
					onClick={e => {
						e.stopPropagation();
					}}>
					<ProductModal
						imagesList={imagesList}
						currentIndex={currentIndex}
						setCurrentIndex={setCurrentIndex}
						currentImage={currentImage}
						setCurrentImage={setCurrentImage}
						currentProduct={currentProduct}
						toggleProductModal={toggleProductModal}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductGallery;
