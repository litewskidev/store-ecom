import { NavLink } from 'react-router-dom';
import './HomeHalf.scss';

const HomeHalf = () => {
	const homeHalfMenu = [
		{
			href: '/categories/women-watches',
			image: 'img_21',
			title: 'PICKS FOR HER',
			action: 'SHOP NOW',
		},
		{
			href: '/categories/men-watches',
			image: 'img_22',
			title: 'PICKS FOR HIM',
			action: 'SHOP NOW',
		},
	];

	return (
		<div className='homeHalf__wrapper'>
			{homeHalfMenu.map((tile, index) => (
				<NavLink to={tile.href} className='homeHalf__tile' key={index}>
					<img
						src={process.env.PUBLIC_URL + `/assets/images/${tile.image}.webp`}
						alt={tile.title}
					/>
					<div className='homeHalf__tile__info'>
						<h5>{tile.title}</h5>
						<p>&#183;</p>
						<p>{tile.action}</p>
					</div>
				</NavLink>
			))}
		</div>
	);
};

export default HomeHalf;
