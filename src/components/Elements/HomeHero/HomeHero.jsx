import { NavLink } from 'react-router-dom';
import ScrollButton from '../ScrollButton/ScrollButton.jsx';
import './HomeHero.scss';

const HomeHero = () => {
	const homeHeroMenu = {
		title: 'YOUR TIME HAS COME.',
		info: 'Our curated selection of timepieces seamlessly amalgamates diverse inspirations, embodying the discerning character, soul, and spirit of those who choose CULTURE.',
		action: 'DISCOVER NOW',
		href: '/categories/all-watches',
		media: 'video_1',
	};

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
						process.env.PUBLIC_URL + `/assets/videos/${homeHeroMenu.media}.mp4`
					}></video>
				<div className='hero__hero__title'>
					<h1>{homeHeroMenu.title}</h1>
					<p>{homeHeroMenu.info}</p>
					<NavLink to={homeHeroMenu.href}>{homeHeroMenu.action}</NavLink>
					<ScrollButton />
				</div>
			</div>
		</div>
	);
};

export default HomeHero;
