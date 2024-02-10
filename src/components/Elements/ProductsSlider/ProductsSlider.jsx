import { useCallback, useMemo } from 'react';
import Slider from 'react-slick';
import ProductCard from '../ProductCard/ProductCard.jsx';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductsSlider = ({ products }) => {
	const CustomPrevArrow = useCallback(
		({ onClick }) => (
			<div className='slick-arrow arrow-prev' onClick={onClick}></div>
		),
		[],
	);

	const CustomNextArrow = useCallback(
		({ onClick }) => (
			<div className='slick-arrow arrow-next' onClick={onClick}></div>
		),
		[],
	);

	const settings = useMemo(
		() => ({
			lazyLoad: true,
			speed: 800,
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow: <CustomPrevArrow />,
			nextArrow: <CustomNextArrow />,
			responsive: [
				{
					breakpoint: 1800,
					settings: {
						slidesToShow: 4,
					},
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						arrows: false,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						dots: true,
					},
				},
			],
		}),
		[],
	);

	return (
		<div className='productsSlider_wrapper'>
			<Slider {...settings}>
				{products?.map((product, index) => (
					<ProductCard product={product} key={index} />
				))}
			</Slider>
		</div>
	);
};

export default ProductsSlider;

ProductsSlider.propTypes = {
	products: PropTypes.arrayOf(PropTypes.object),
};
