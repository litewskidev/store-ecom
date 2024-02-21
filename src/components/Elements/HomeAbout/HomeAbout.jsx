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
		<div className='homeAbout__wrapper'>
			<div className='homeAbout__container'>
				<div className='homeAbout__image'>
					<img
						src={
							process.env.PUBLIC_URL +
							`/assets/images/${homeAboutMenu.image}.webp`
						}
						alt=''
					/>
				</div>
				<div className='homeAbout__info'>
					<div className='homeAbout__info__inner'>
						<h2>{homeAboutMenu.title}</h2>
						<p>{homeAboutMenu.info}</p>
						<div className='homeAbout__action'>
							<p>{homeAboutMenu.action.title}</p>
							<p>&#183;</p>
							<NavLink to='/about'>
								<button>{homeAboutMenu.action.action}</button>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeAbout;
