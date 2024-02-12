import { NavLink } from 'react-router-dom';
import ScrollButton from '../ScrollButton/ScrollButton.jsx';
import './HomeHero.scss';

const HomeHero = () => {
	return (
		<div className='hero__wrapper'>
			<div className='hero__hero'>
				<video
					className='hero__hero__video'
					autoPlay
					loop
					muted
					playsInline
					type='video/mp4'
					src={
						process.env.PUBLIC_URL + '/assets/videos/video_1_superlow.mp4'
					}></video>
				<div className='hero__hero__title'>
					<h1>YOUR TIME HAS COME.</h1>
					<p>
						Our curated selection of timepieces seamlessly amalgamates diverse
						inspirations, embodying the discerning character, soul, and spirit
						of those who choose CULTURE.
					</p>
					<NavLink to='/categories/all-watches'>DISCOVER NOW</NavLink>
					<ScrollButton />
				</div>
			</div>
		</div>
	);
};

export default HomeHero;
