import React, { useCallback, useMemo, useState } from 'react';
import useToggle from '../../../hooks/useToggle.js';
import SocialModal from '../SocialModal/SocialModal.jsx';
import './HomeSocial.scss';

const HomeSocial = () => {
	const [isSocialModal, toggleSocialModal] = useToggle(false);
	const [currentSocial, setCurrentSocial] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(null);

	const handleSocialModal = useCallback(
		(homeSocialMenu, index) => {
			toggleSocialModal();
			setCurrentSocial(homeSocialMenu[index]);
			setCurrentIndex(index);
		},
		[toggleSocialModal],
	);

	const homeSocialMenu = useMemo(
		() => [
			{
				image: 'instagram_1',
				href: 'https://www.instagram.com',
				desc: 'Explore urban elegance with our latest timepiece collection. Featuring a sleek design and a captivating backdrop of the city skyline and river. #WatchGoals',
				tag: 'Discover the #CULTURE through the link in our bio.',
				date: 'February 10',
			},
			{
				image: 'instagram_2',
				href: 'https://www.instagram.com',
				desc: 'Introducing sophistication in every detail. Our wristwatch with arrow-shaped hands adds a touch of class to any ensemble. #TimelessElegance',
				tag: 'Discover the #CULTURE through the link in our bio.',
				date: 'March 15',
			},
			{
				image: 'instagram_3',
				href: 'https://www.instagram.com',
				desc: 'Elevate your style with our premium watches. From the bustling city streets to the vibrant red walls, our timepieces complement every moment. #WatchEssentials',
				tag: 'Discover the #CULTURE through the link in our bio.',
				date: 'August 5',
			},
			{
				image: 'instagram_4',
				href: 'https://www.instagram.com',
				desc: 'Discover the epitome of luxury with our gold wristwatch collection. With its intricate gold dial and complicated mechanism, it is a statement piece for the discerning gentleman. #LuxuryWatches',
				tag: 'Discover the #CULTURE through the link in our bio.',
				date: 'November 28',
			},
		],
		[],
	);

	return (
		<div className='homeSocial__wrapper'>
			<div className='homeSocial__inner'>
				<div className='homeSocial__inner__header'>
					<img
						src={process.env.PUBLIC_URL + '/assets/icons/instagram.svg'}
						alt='instagram icon'
					/>
					<h4>@CULTURE</h4>
					<p>&#8231;</p>
					<a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
						FOLLOW US
					</a>
				</div>
				<div className='homeSocial__inner__images'>
					{homeSocialMenu.map((social, index) => (
						<div className='homeSocial__inner__images__box' key={index}>
							<img
								src={
									process.env.PUBLIC_URL +
									`/assets/images/instagram/${social.image}.webp`
								}
								alt=''
								onClick={() => {
									handleSocialModal(homeSocialMenu, index);
								}}
							/>
						</div>
					))}
				</div>
			</div>
			<div
				className={`homeSocial__modal ${isSocialModal ? 'active' : ''}`}
				onClick={toggleSocialModal}>
				<SocialModal
					toggleSocialModal={toggleSocialModal}
					currentSocial={currentSocial}
					setCurrentSocial={setCurrentSocial}
					currentIndex={currentIndex}
					setCurrentIndex={setCurrentIndex}
					homeSocialMenu={homeSocialMenu}
				/>
			</div>
		</div>
	);
};

export default HomeSocial;
