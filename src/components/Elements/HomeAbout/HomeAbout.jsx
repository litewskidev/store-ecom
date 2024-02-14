import { NavLink } from 'react-router-dom';
import './HomeAbout.scss';

const HomeAbout = () => {
	return (
		<div className='heroAbout__wrapper'>
			<div className='heroAbout__container'>
				<div className='heroAbout__image'>
					<img
						src={process.env.PUBLIC_URL + '/assets/images/img_20.webp'}
						alt=''
					/>
				</div>
				<NavLink to='/about' className='heroAbout__info'>
					<div className='heroAbout__info__inner'>
						<p>THE VALUE</p>
						<h2>CULTURE</h2>
						<p>
							Our ethos is deeply intertwined with our journey that extends
							beyond geographical origins. From our humble beginnings to our
							present story, we embrace the essence of diverse influences,
							uniting in a commitment to quality, authenticity, and respect for
							heritage.
						</p>
						<div className='heroAbout__action'>
							<p>ABOUT US</p>
							<p>&#183;</p>
							<p>EXPLORE</p>
						</div>
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default HomeAbout;
