import { useCallback } from 'react';
import PropTypes from 'prop-types';
import './SocialModal.scss';

const SocialModal = ({
	toggleSocialModal,
	currentSocial,
	setCurrentSocial,
	currentIndex,
	setCurrentIndex,
	homeSocialMenu,
}) => {
	const handleNextSocial = useCallback(() => {
		const nextIndex = (currentIndex + 1) % homeSocialMenu.length;
		setCurrentSocial(homeSocialMenu[nextIndex]);
		setCurrentIndex(nextIndex);
	}, [currentIndex, setCurrentSocial, setCurrentIndex, homeSocialMenu]);

	const handlePrevSocial = useCallback(() => {
		const prevIndex =
			(currentIndex - 1 + homeSocialMenu.length) % homeSocialMenu.length;
		setCurrentSocial(homeSocialMenu[prevIndex]);
		setCurrentIndex(prevIndex);
	}, [currentIndex, setCurrentSocial, setCurrentIndex, homeSocialMenu]);

	return (
		<div
			className='socialModal__wrapper'
			onClick={e => {
				e.stopPropagation();
			}}>
			<div className='socialModal__left social__desktop'>
				<img
					src={
						process.env.PUBLIC_URL +
						`/assets/images/instagram/${currentSocial?.image}.webp`
					}
					alt=''
				/>
			</div>
			<div className='socialModal__right'>
				<div className='socialModal__right__header'>
					<div className='socialModal__right__header__link'>
						<div className='socialModal__right__header__link__icon'>
							<img
								src={process.env.PUBLIC_URL + '/assets/icons/instagram.svg'}
								alt='instagram icon'
							/>
						</div>
						<a
							href='https://www.instagram.com'
							target='_blank'
							rel='noreferrer'>
							culture
						</a>
					</div>
					<div
						className='socialModal__right__header__button'
						onClick={toggleSocialModal}>
						<img
							src={process.env.PUBLIC_URL + '/assets/icons/close.svg'}
							alt='close button'
						/>
					</div>
				</div>
				<div className='socialModal__left social__mobile'>
					<img
						src={
							process.env.PUBLIC_URL +
							`/assets/images/instagram/${currentSocial?.image}.webp`
						}
						alt=''
					/>
				</div>
				<div className='socialModal__right__nav'>
					<div onClick={handlePrevSocial}>
						<img
							src={process.env.PUBLIC_URL + '/assets/icons/arrow-prev.svg'}
							alt='arrow previous icon'
						/>
					</div>
					<div onClick={handleNextSocial}>
						<img
							src={process.env.PUBLIC_URL + '/assets/icons/arrow-next.svg'}
							alt='arrow next icon'
						/>
					</div>
				</div>
				<div className='socialModal__right__desc'>
					<div className='socialModal__right__desc__info'>
						<p>{currentSocial?.desc}</p>
						<p>{currentSocial?.tag}</p>
					</div>
					<div className='socialModal__right__desc__footer'>
						<p>{currentSocial?.date}</p>
						<p>&#183;</p>
						<a
							href='https://www.instagram.com'
							target='_blank'
							rel='noreferrer'>
							View on Instagram
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SocialModal;

SocialModal.propTypes = {
	toggleSocialModal: PropTypes.func.isRequired,
	currentSocial: PropTypes.shape({
		image: PropTypes.string,
		desc: PropTypes.string,
	}),
	setCurrentSocial: PropTypes.func.isRequired,
	currentIndex: PropTypes.number,
	setCurrentIndex: PropTypes.func.isRequired,
	homeSocialMenu: PropTypes.arrayOf(
		PropTypes.shape({
			image: PropTypes.string,
			href: PropTypes.string,
			desc: PropTypes.string,
		}),
	).isRequired,
};
