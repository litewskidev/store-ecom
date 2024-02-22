import ProductInfo from '../ProductInfo/ProductInfo.jsx';
import ProductTabs from '../ProductTabs/ProductTabs.jsx';
import ProductBrand from '../ProductBrand/ProductBrand.jsx';
import './ProductNew.scss';

const ProductNew = ({ product }) => {
	return (
		<div className='productNew__wrapper'>
			<ProductInfo product={product} />
			<ProductTabs product={product} />
			<ProductBrand product={product} />
		</div>
	);
};

export default ProductNew;
