import ProductGallery from '../ProductGallery/ProductGallery.jsx';
import ProductActions from '../ProductActions/ProductActions.jsx';
import './ProductInfo.scss';

const ProductInfo = ({ product }) => {
	return (
		<div className='productInfo__wrapper'>
			<ProductGallery product={product} />
			<ProductActions product={product} />
		</div>
	);
};

export default ProductInfo;
