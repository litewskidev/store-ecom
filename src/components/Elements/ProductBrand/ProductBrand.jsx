import './ProductBrand.scss';

const ProductBrand = ({ product }) => {
	return (
		<div className='productBrand__wrapper'>
			<div>
				<h1>{product?.brand.name}</h1>
			</div>
		</div>
	);
};

export default ProductBrand;
