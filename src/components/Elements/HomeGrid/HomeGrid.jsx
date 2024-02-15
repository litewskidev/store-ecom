import { NavLink } from 'react-router-dom';
import './HomeGrid.scss';

const HomeGrid = () => {
	const homeGridMenu = {
		option_1: {
			title: 'SINCE 1884',
			info: 'Discover the epitome of Swiss craftsmanship and cutting-edge design with Breitling, a renowned brand synonymous with precision and luxury in the world of watches.',
			action: 'SHOP BREITLING',
			href: '/brands/breitling',
			image: 'img_10',
		},
		option_2: {
			title: 'SINCE 1905',
			info: 'Indulge in the epitome of luxury and prestige with Rolex, a brand synonymous with excellence, innovation, and enduring style.',
			action: 'SHOP ROLEX',
			href: '/brands/rolex',
			image: 'img_11',
		},
	};

	return (
		<div className='stickyHalf__wrapper'>
			<div className='stickyHalf__container'>
				<NavLink to={homeGridMenu.option_1.href} className='stickyHalf__info'>
					<div className='stickyHalf__info__inner'>
						<h4>{homeGridMenu.option_1.title}</h4>
						<p>{homeGridMenu.option_1.info}</p>
						<p>{homeGridMenu.option_1.action}</p>
					</div>
				</NavLink>
				<div className='stickyHalf__image'>
					<img
						src={
							process.env.PUBLIC_URL +
							`/assets/images/${homeGridMenu.option_1.image}.webp`
						}
						alt=''
					/>
				</div>
			</div>
			<div className='stickyHalf__container half__bottom'>
				<div className='stickyHalf__image'>
					<img
						src={
							process.env.PUBLIC_URL +
							`/assets/images/${homeGridMenu.option_2.image}.webp`
						}
						alt=''
					/>
				</div>
				<NavLink to={homeGridMenu.option_2.href} className='stickyHalf__info'>
					<div className='stickyHalf__info__inner'>
						<h4>{homeGridMenu.option_2.title}</h4>
						<p>{homeGridMenu.option_2.info}</p>
						<p>{homeGridMenu.option_2.action}</p>
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default HomeGrid;
