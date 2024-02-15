import { NavLink } from 'react-router-dom';
import './HomeAbout.scss';

const HomeAbout = () => {
	const homeAboutMenu = {
		title: 'THE VALUE',
		info: 'Our ethos is deeply intertwined with our journey that extends beyond geographical origins. From our humble beginnings to our present story, we embrace the essence of diverse influences, uniting in a commitment to quality, authenticity, and respect for heritage.',
		action: {
			title: 'ABOUT US',
			action: 'EXPLORE',
		},
		image: 'img_20',
	};

	return (
		<div className='heroAbout__wrapper'>
			<div className='heroAbout__container'>
				<div className='heroAbout__image'>
					<img
						src={
							process.env.PUBLIC_URL +
							`/assets/images/${homeAboutMenu.image}.webp`
						}
						alt=''
					/>
				</div>
				<NavLink to='/about' className='heroAbout__info'>
					<div className='heroAbout__info__inner'>
						<h2>{homeAboutMenu.title}</h2>
						<p>{homeAboutMenu.info}</p>
						<div className='heroAbout__action'>
							<p>{homeAboutMenu.action.title}</p>
							<p>&#183;</p>
							<p>{homeAboutMenu.action.action}</p>
						</div>
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default HomeAbout;
