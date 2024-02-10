import './SocialModal.scss';

const SocialModal = ({ social, close }) => {
	return (
		<div className='socialModal__wrapper'>
			<div className='socialModal__left'>
				<img
					src={
						process.env.PUBLIC_URL +
						`/assets/images/instagram/${social?.image}.webp`
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
						<a>culture</a>
					</div>
					<div onClick={close}>X</div>
				</div>
			</div>
			<div>
				<p>{social?.desc}</p>
			</div>
		</div>
	);
};

export default SocialModal;
