import { useCallback, useState } from 'react';
import './ProductGallery.scss';
import useToggle from '../../../hooks/useToggle';
import ProductModal from '../ProductModal/ProductModal';

const ProductGallery = ({ product }) => {
	const [currentImage, setCurrentImage] = useState(product?.images[0]);
	const [currentProduct, setCurrentProduct] = useState(product?.sku);
	const [isProductModalActive, toggleProductModal] = useToggle(false);

	const handleCurrentImage = useCallback(image => {
		setCurrentImage(image);
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
				{product?.images.map((image, index) => (
					<div
						className={`productGallery__list__item ${currentImage === image ? 'active' : ''}`}
						key={index}
						onClick={() => handleCurrentImage(image)}>
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
						`/assets/images/watches/${product?.sku}/${currentImage}.webp`
					}
					alt=''
				/>
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
						currentImage={currentImage}
						currentProduct={currentProduct}
						toggleProductModal={toggleProductModal}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductGallery;
