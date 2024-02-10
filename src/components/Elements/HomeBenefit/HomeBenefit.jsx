import { useMemo } from 'react';
import './HomeBenefit.scss';

const HomeBenefit = () => {
	const homeBenefitMenu = useMemo(
		() => [
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
		],
		[],
	);

	return (
		<div className='homeBenefit__wrapper'>
			{homeBenefitMenu.map((benefit, index) => (
				<div className='homeBenefit__box' key={index}>
					<img
						src={process.env.PUBLIC_URL + '/assets/icons/asterisk.svg'}
						alt=''
					/>
					<p>
						{benefit.options.first}
						<br />
						{benefit.options.second}
					</p>
				</div>
			))}
		</div>
	);
};

export default HomeBenefit;
