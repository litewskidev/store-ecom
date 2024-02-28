import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ProductCard from '../ProductCard/ProductCard.jsx';
import PropTypes from 'prop-types';
import './Products.scss';

const Products = ({ products }) => {
	const location = useLocation();

	//  GSAP
	const productsRef = useRef(null);
	useGSAP(() => {
		gsap.fromTo(
			productsRef.current,
			{ opacity: 0, x: '-2%' },
			{ opacity: 1, x: 0, duration: 0.5, ease: 'sine.out', force3D: true },
		);
	}, [location]);

	return (
		<div className='products__wrapper' ref={productsRef}>
			{products?.map((product, index) => (
				<ProductCard product={product} key={index} />
			))}
		</div>
	);
};

Products.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			brand: PropTypes.shape({
				name: PropTypes.string.isRequired,
			}).isRequired,
			model: PropTypes.string.isRequired,
			images: PropTypes.arrayOf(PropTypes.string).isRequired,
			price: PropTypes.shape({
				currency: PropTypes.string.isRequired,
				base: PropTypes.number.isRequired,
				discount: PropTypes.number.isRequired,
			}).isRequired,
			year: PropTypes.number.isRequired,
		}),
	),
};

export default Products;
