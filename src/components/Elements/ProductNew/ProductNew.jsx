import ProductInfo from '../ProductInfo/ProductInfo.jsx';
import ProductTabs from '../ProductTabs/ProductTabs.jsx';
import ProductBrand from '../ProductBrand/ProductBrand.jsx';
import ProductSimilar from '../ProductSimilar/ProductSimilar.jsx';
import './ProductNew.scss';
import Container from '../Container/Container.jsx';

const ProductNew = ({ product }) => {
	return (
		<div className='productNew__wrapper'>
			<Container>
				<ProductInfo product={product} />
				<ProductTabs product={product} />
				<ProductBrand product={product} />
				<div className='productNew__similar'>
					<ProductSimilar product={product} />
				</div>
			</Container>
		</div>
	);
};

export default ProductNew;
