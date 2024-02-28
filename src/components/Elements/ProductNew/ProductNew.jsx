import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Container from '../Container/Container.jsx';
import ProductInfo from '../ProductInfo/ProductInfo.jsx';
import ProductTabs from '../ProductTabs/ProductTabs.jsx';
import ProductBrand from '../ProductBrand/ProductBrand.jsx';
import ProductSimilar from '../ProductSimilar/ProductSimilar.jsx';
import './ProductNew.scss';

const ProductNew = ({ product }) => {
	const location = useLocation();

	//  GSAP
	const productRef = useRef(null);
	useGSAP(() => {
		gsap.fromTo(
			productRef.current,
			{ opacity: 0, x: '2%' },
			{ opacity: 1, x: 0, duration: 0.5, ease: 'sine.out', force3D: true },
		);
	}, [location]);

	return (
		<div className='productNew__wrapper' ref={productRef}>
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
