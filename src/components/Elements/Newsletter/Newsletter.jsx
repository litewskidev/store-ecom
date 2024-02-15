import './Newsletter.scss';

const Newsletter = () => {
	const newsletterMenu = {
		title: 'JOIN THE CULTURE',
		info: 'Immerse yourself in a captivating world of horological charm and magic.',
		subtitle: 'Newsletter',
		subinfo:
			'Sign up for our newsletter and enjoy collection previews, new arrivals, events and other exclusive offers.',
		action: 'SIGN UP',
		image: 'img_13',
	};

	return (
		<section id='newsletter' className='newsletter__wrapper'>
			<div className='newsletter__left'>
				<div className='newsletter__left__inner'>
					<div className='newsletter__left__inner__header'>
						<h2>{newsletterMenu.title}</h2>
						<p>{newsletterMenu.info}</p>
					</div>
					<div className='newsletter__left__inner__footer'>
						<div className='newsletter__left__inner__footer__title'>
							<h6>{newsletterMenu.subtitle}</h6>
							<p>{newsletterMenu.subinfo}</p>
						</div>
						<form className='newsletter__left__inner__footer__form'>
							<input
								type='email'
								placeholder='Enter your email address*'></input>
							<button>{newsletterMenu.action}</button>
						</form>
					</div>
				</div>
			</div>
			<div className='newsletter__right'>
				<img
					src={
						process.env.PUBLIC_URL +
						`/assets/images/${newsletterMenu.image}.webp`
					}
					alt=''
				/>
			</div>
		</section>
	);
};

export default Newsletter;
