import './HomeBenefit.scss';

const HomeBenefit = () => {
	const homeBenefitMenu = [
		{
			options: {
				first: 'EASY RETURNS',
				second: '& COLLECTIONS',
			},
		},
		{
			options: {
				first: 'FREE WORLDWIDE',
				second: 'SHIPPING OVER $650',
			},
		},
		{
			options: {
				first: 'LOCAL & SECURE',
				second: 'PAYMENT OPTIONS',
			},
		},
	];

	return (
		<div className='homeBenefit__wrapper'>
			{homeBenefitMenu.map((benefit, index) => (
				<div className='homeBenefit__box' key={index}>
					<img
						src={process.env.PUBLIC_URL + '/assets/icons/star.svg'}
						alt=''
					/>
					<h5>
						{benefit.options.first}
						<br />
						{benefit.options.second}
					</h5>
				</div>
			))}
		</div>
	);
};

export default HomeBenefit;
