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
				desc: '',
			},
			{
				image: 'instagram_2',
				href: 'https://www.instagram.com',
				desc: '',
			},
			{
				image: 'instagram_3',
				href: 'https://www.instagram.com',
				desc: '',
			},
			{
				image: 'instagram_4',
				href: 'https://www.instagram.com',
				desc: '',
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
					<h3>@CULTURE</h3>
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
			<div className={`homeSocial__modal ${isSocialModal ? 'active' : ''}`}>
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
