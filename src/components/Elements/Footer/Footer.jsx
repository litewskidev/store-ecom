import { NavLink } from 'react-router-dom';
import useToggle from '../../../hooks/useToggle.js';
import SocialLinks from '../SocialLinks/SocialLinks.jsx';
import './Footer.scss';

const Footer = () => {
	//  BUTTONS HANDLERS
	const [isCompanyListActive, toggleCompanyList] = useToggle(false);
	const [isCustomerListActive, toggleCustomerList] = useToggle(false);
	const [isStoresListActive, toggleStoresList] = useToggle(false);
	const [isContactListActive, toggleContactList] = useToggle(false);

	return (
		<footer id='footer' className='footer__wrapper'>
			<nav className='footer__body'>
				<div className='footer__body__item'>
					<div
						className='footer__body__item__title'
						onClick={toggleCompanyList}>
						<h6>COMPANY</h6>
						<div className='footer__body__item__title__icon'>
							<img
								className={isCompanyListActive ? 'rotate' : ''}
								src={process.env.PUBLIC_URL + '/assets/icons/arrow-down.svg'}
								alt=''
							/>
						</div>
					</div>
					<div
						className={
							isCompanyListActive
								? 'footer__body__item__list list-open'
								: 'footer__body__item__list'
						}>
						<ul
							className={`footer__body__item__list__inner ${isCompanyListActive ? 'open' : ''}`}>
							<li className='footer__body__item__list__inner__link'>
								<NavLink>ABOUT US</NavLink>
							</li>
							<li className='footer__body__item__list__inner__link'>
								<NavLink>RESPONSIBILITY</NavLink>
							</li>
							<li className='footer__body__item__list__inner__link'>
								<NavLink>CAREERS</NavLink>
							</li>
							<li className='footer__body__item__list__inner__link'>
								<NavLink>COOKIE POLICY</NavLink>
							</li>
							<li className='footer__body__item__list__inner__link'>
								<NavLink>PRIVACY POLICY</NavLink>
							</li>
							<li className='footer__body__item__list__inner__link'>
								<NavLink>TERMS & CONDITIONS</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div className='footer__body__item'>
					<div className='footer__body__item__title' onClick={toggleStoresList}>
						<h6>OUR STORES</h6>
						<div className='footer__body__item__title__icon'>
							<img
								className={isStoresListActive ? 'rotate' : ''}
								src={process.env.PUBLIC_URL + '/assets/icons/arrow-down.svg'}
								alt=''
							/>
						</div>
					</div>
					<div
						className={
							isStoresListActive
								? 'footer__body__item__list list-open'
								: 'footer__body__item__list'
						}>
						<ul
							className={`footer__body__item__list__inner ${isStoresListActive ? 'open' : ''}`}>
							<li className='footer__body__item__list__inner__link'>
								<NavLink>NEW YORK</NavLink>
							</li>
							<li className='footer__body__item__list__inner__link'>
								<NavLink>LONDON</NavLink>
							</li>
							<li className='footer__body__item__list__inner__link'>
								<NavLink>PARIS</NavLink>
							</li>
							<li className='footer__body__item__list__inner__link'>
								<NavLink>ROME</NavLink>
							</li>
							<li className='footer__body__item__list__inner__link'>
								<NavLink>TOKYO</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div className='footer__body__item'>
					<div
						className='footer__body__item__title'
						onClick={toggleCustomerList}>
						<h6>CUSTOMER CARE</h6>
						<div className='footer__body__item__title__icon'>
							<img
								className={isCustomerListActive ? 'rotate' : ''}
								src={process.env.PUBLIC_URL + '/assets/icons/arrow-down.svg'}
								alt=''
							/>
						</div>
					</div>
					<div
						className={
							isCustomerListActive
								? 'footer__body__item__list list-open'
								: 'footer__body__item__list'
						}>
						<ul
							className={`footer__body__item__list__inner ${isCustomerListActive ? 'open' : ''}`}>
							<li className='footer__body__item__list__inner__link'>
								<NavLink>DELIVERY</NavLink>
							</li>
							<li className='footer__body__item__list__inner__link'>
								<NavLink>RETURNS & REFUNDS</NavLink>
							</li>
							<li className='footer__body__item__list__inner__link'>
								<NavLink>FAQ</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div className='footer__body__item'>
					<div
						className='footer__body__item__title'
						onClick={toggleContactList}>
						<h6>GET IN TOUCH</h6>
						<div className='footer__body__item__title__icon'>
							<img
								className={isContactListActive ? 'rotate' : ''}
								src={process.env.PUBLIC_URL + '/assets/icons/arrow-down.svg'}
								alt=''
							/>
						</div>
					</div>
					<div
						className={
							isContactListActive
								? 'footer__body__item__list list-open'
								: 'footer__body__item__list'
						}>
						<ul
							className={`footer__body__item__list__inner ${isContactListActive ? 'open' : ''}`}>
							<li className='footer__body__item__list__inner__link'>
								<NavLink>CONTACT US</NavLink>
							</li>
							<li className='footer__body__item__list__inner__link'>
								<NavLink>LIVE CHAT</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className='footer__bottom'>
				<div className='footer__bottom__socials'>
					<SocialLinks />
				</div>
			</div>
			<div className='footer__copyright'>
				<p>© 2024 CULTURE. All Rights Reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
