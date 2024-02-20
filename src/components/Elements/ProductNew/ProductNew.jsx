import ProductInfo from '../ProductInfo/ProductInfo.jsx';
import ProductTabs from '../ProductTabs/ProductTabs.jsx';
import ProductCompany from '../ProductCompany/ProductCompany.jsx';
import './ProductNew.scss';

const ProductNew = ({ product }) => {
	return (
		<div className='productNew__wrapper'>
			<ProductInfo product={product} />
			<ProductTabs />
			<ProductCompany />
		</div>
	);
};

export default ProductNew;
