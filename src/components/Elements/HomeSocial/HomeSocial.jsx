import React, { useCallback, useState } from 'react';
import useToggle from '../../../hooks/useToggle.js';
import SocialModal from '../SocialModal/SocialModal.jsx';
import './HomeSocial.scss';

const HomeSocial = () => {
	const homeSocialMenu = {
		title: '@CULTURE',
		action: 'FOLLOW US',
		href: 'https://www.instagram.com',
		list: [
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
	};
	const homeSocialList = homeSocialMenu.list;

	const [isSocialModal, toggleSocialModal] = useToggle(false);
	const [currentSocial, setCurrentSocial] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(null);

	const handleSocialModal = useCallback(
		(homeSocialList, index) => {
			toggleSocialModal();
			setCurrentSocial(homeSocialList[index]);
			setCurrentIndex(index);
		},
		[toggleSocialModal],
	);

	return (
		<div className='homeSocial__wrapper'>
			<div className='homeSocial__inner'>
				<div className='homeSocial__inner__header'>
					<img
						src={process.env.PUBLIC_URL + '/assets/icons/instagram.svg'}
						alt='instagram icon'
					/>
					<h4>{homeSocialMenu.title}</h4>
					<p>&#183;</p>
					<a href={homeSocialMenu.href} target='_blank' rel='noreferrer'>
						{homeSocialMenu.action}
					</a>
				</div>
				<div className='homeSocial__inner__images'>
					{homeSocialList.map((social, index) => (
						<div className='homeSocial__inner__images__box' key={index}>
							<img
								src={
									process.env.PUBLIC_URL +
									`/assets/images/instagram/${social.image}.webp`
								}
								alt=''
								onClick={() => {
									handleSocialModal(homeSocialList, index);
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
					homeSocialMenu={homeSocialList}
				/>
			</div>
		</div>
	);
};

export default HomeSocial;
