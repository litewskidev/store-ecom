import './Newsletter.scss';

const Newsletter = () => {
	return (
		<section id='newsletter' className='newsletter__wrapper'>
			<div className='newsletter__left'>
				<div className='newsletter__left__header'>
					<h2>JOIN THE CULTURE</h2>
					<p>
						Immerse yourself in a captivating world of horological charm and
						magic.
					</p>
				</div>
				<div className='newsletter__left__footer'>
					<div className='newsletter__left__footer__title'>
						<h6>Newsletter</h6>
						<p>
							Sign up for our newsletter and enjoy collection previews, new
							arrivals, events and other exclusive offers.
						</p>
					</div>
					<form className='newsletter__left__footer__form'>
						<input type='email' placeholder='Enter your email address*'></input>
						<button>SIGN UP</button>
					</form>
				</div>
			</div>
			<div className='newsletter__right'>
				<img
					src={process.env.PUBLIC_URL + '/assets/images/img_13.webp'}
					alt=''
				/>
			</div>
		</section>
	);
};

export default Newsletter;
