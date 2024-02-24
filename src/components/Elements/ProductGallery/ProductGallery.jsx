import { useCallback, useEffect, useState } from 'react';
import useToggle from '../../../hooks/useToggle.js';
import ProductModal from '../ProductModal/ProductModal.jsx';
import './ProductGallery.scss';

const ProductGallery = ({ product }) => {
	//  STATES
	const [currentProduct, setCurrentProduct] = useState(product.sku);
	const [imagesList, setImagesList] = useState(product.images);
	const [currentImage, setCurrentImage] = useState(product.images[0]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isProductModalActive, toggleProductModal] = useToggle(false);

	useEffect(() => {
		setCurrentProduct(product.sku);
		setImagesList(product.images);
		setCurrentImage(product.images[0]);
	}, [product.sku, product.images]);

	//  BUTTONS HANDLERS
	const handleCurrentImage = useCallback((image, index) => {
		setCurrentImage(image);
		setCurrentIndex(index);
	}, []);

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
			<div className='productGallery__show' onClick={toggleProductModal}>
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
