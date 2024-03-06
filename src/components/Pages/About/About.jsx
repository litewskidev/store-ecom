import { NavLink, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './About.scss';

const About = () => {
	const location = useLocation();

	//  GSAP
	const aboutRef = useRef(null);
	useGSAP(() => {
		gsap.fromTo(
			aboutRef.current,
			{ opacity: 0, y: '-1%' },
			{ opacity: 1, y: 0, duration: 0.5, ease: 'sine.out', force3D: true },
		);
	}, [location]);

	const aboutMenu = {
		mainTitle: 'A Culture of Elegance & Craftsmanship.',
		mainInfo: [
			{
				info: 'Welcome to Culture, a sanctuary where luxury intertwines with legacy, and sophistication intertwines with precision. We pride ourselves on being more than just purveyors of fine watches. We are curators of timeless elegance and guardians of horological excellence.',
			},
			{
				info: 'Our journey began with a profound appreciation for the artistry and craftsmanship behind each timepiece, leading us to create an unparalleled destination for watch enthusiasts worldwide. At Culture, we believe that every watch tells a story of tradition, innovation, and uncompromising quality. Our collection, meticulously handpicked from iconic brands like Rolex, Breitling, and Patek Philippe, embodies the pinnacle of watchmaking mastery. From the iconic Submariner to the elegant Nautilus, each timepiece in our selection is a testament to the enduring legacy of its brand and the dedication of its craftsmen. But our dedication goes beyond mere curation. We strive to provide an immersive experience for our customers — a journey into the heart and soul of luxury timekeeping.',
			},
			{
				info: 'As you explore our collection, you will discover watches that transcend time and fashion—timepieces that are not just accessories, but works of art to be cherished and passed down through generations. Join us on this journey and discover why Culture is more than just a store.',
			},
			{
				info: 'Welcome to Culture where time stands still, but elegance lasts forever.',
			},
		],
		subTitle: 'Our commitment to excellence does not end with our collection.',
		subInfo: [
			{
				title: 'experience',
				info: 'We strive to create a seamless shopping experience for our customers.',
			},
			{
				title: 'sense',
				info: 'We understand that buying a watch is not just a transaction.',
			},
			{
				title: 'passion',
				info: 'We are sharing a passion for enduring beauty of timepieces.',
			},
		],
		action: 'DISCOVER NOW',
	};

	return (
		<section id='about'>
			<div className='about__wrapper' ref={aboutRef}>
				<div className='about__top'>
					<div className='about__top__inner'>
						<h1>{aboutMenu.mainTitle}</h1>
						<div className='about__top__inner__info'>
							{aboutMenu.mainInfo.map((p, index) => (
								<p key={index}>{p.info}</p>
							))}
						</div>
						<div className='about__top__inner__button'>
							<NavLink to={'/categories/all-watches'}>
								{aboutMenu.action}
							</NavLink>
						</div>
					</div>
				</div>
				<div className='about__bottom'>
					<img
						src={process.env.PUBLIC_URL + '/assets/images/img_27.webp'}
						alt=''
					/>
					<div className='about__bottom__inner'>
						<h2>{aboutMenu.subTitle}</h2>
						<div className='about__bottom__inner__grid'>
							{aboutMenu.subInfo.map((box, index) => (
								<div className='about__bottom__inner__grid__box' key={index}>
									<h6>{box.title}</h6>
									<p>{box.info}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
