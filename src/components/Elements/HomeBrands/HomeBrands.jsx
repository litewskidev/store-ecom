import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import './HomeBrands.scss';

const HomeBrands = () => {
	const settings = {
		lazyLoad: true,
		speed: 1000,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 1800,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	};

	const homeBrandsMenu = {
		title: 'FEATURED BRANDS',
		action: 'VIEW ALL',
		list: [
			{
				id: 'rolex',
				name: 'Rolex',
			},
			{
				id: 'audemars-piguet',
				name: 'Audemars Piguet',
			},
			{
				id: 'de-bethune',
				name: 'De Bethune',
			},
			{
				id: 'patek-philippe',
				name: 'Patek Philippe',
			},
			{
				id: 'journe',
				name: 'F.P. Journe',
			},
			{
				id: 'moser-cie',
				name: 'H. Moser & Cie.',
			},
			{
				id: 'lange-sohne',
				name: 'A. Lange & Söhne',
			},
			{
				id: 'vacheron-constantin',
				name: 'Vacheron Constantin',
			},
			{
				id: 'tudor',
				name: 'Tudor',
			},
			{
				id: 'breitling',
				name: 'Breitling',
			},
			{
				id: 'omega',
				name: 'Omega',
			},
			{
				id: 'greubel-forsey',
				name: 'Greubel Forsey',
			},
		],
	};

	return (
		<div className='homeBrands__wrapper'>
			<Slider {...settings}>
				{homeBrandsMenu.list.map(brand => (
					<div className='homeBrands__box' key={brand.id}>
						<NavLink to={`/brands/${brand.id}`}>
							<img
								src={
									process.env.PUBLIC_URL +
									`/assets/icons/brands/${brand.id}.svg`
								}
								alt={`${brand.name} logo`}
							/>
						</NavLink>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default HomeBrands;
