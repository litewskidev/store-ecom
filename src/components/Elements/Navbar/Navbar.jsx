import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../redux/slices/authSlice.js';
import useWindowLocation from '../../../hooks/useWindowLocation.js';
import useScrollUpdate from '../../../hooks/useScrollUpdate.js';
import useBodyOverflow from '../../../hooks/useBodyOverflow.js';
import MenuDesktop from '../MenuDesktop/MenuDesktop.jsx';
import MenuMobile from '../MenuMobile/MenuMobile.jsx';
import LoginModal from '../LoginModal/LoginModal.jsx';
import CartModal from '../CartModal/CartModal.jsx';
import SearchModal from '../SearchModal/SearchModal.jsx';
import './Navbar.scss';

const Navbar = () => {
	const navbarMenu = {
		title: 'MENU',
		company: 'CULTURE',
		categories: {
			all: 'ALL WATCHES',
			new: 'NEW ARRIVALS',
			brands: 'BRANDS',
		},
		shopByCategory: {
			title: 'SHOP BY CATEGORY',
			links: [
				{
					id: 'all-watches',
					name: 'All Watches',
				},
				{
					id: 'new-arrivals',
					name: 'New Arrivals',
				},
				{
					id: 'coming-soon',
					name: 'Coming Soon',
				},
				{
					id: 'best-sellers',
					name: 'Best Sellers',
				},
				{
					id: 'men-watches',
					name: `Men's Watches`,
				},
				{
					id: 'women-watches',
					name: `Women's Watches`,
				},
				{
					id: 'sale',
					name: 'Sale',
				},
			],
		},
		featuredCollections: {
			title: 'FEATURED COLLECTIONS',
			links: [
				{
					id: 'grail-watches',
					name: 'Grail Watches',
				},
				{
					id: 'independent-watches',
					name: 'Independent Watches',
				},
				{
					id: 'anything-but-ordinary',
					name: 'Anything But Ordinary',
				},
				{
					id: 'daily-drivers',
					name: 'Daily Drivers',
				},
				{
					id: 'holy-trinity',
					name: 'The Holy Trinity',
				},
				{
					id: 'all-collections',
					name: 'View All Collections',
				},
			],
		},
		featuredBrands: {
			title: 'FEATURED BRANDS',
			links: [
				{
					id: 'rolex',
					name: 'Rolex',
				},
				{
					id: 'audemars-piguet',
					name: 'Audemars Piguet',
				},
				{
					id: 'de-bethune',
					name: 'De Bethune',
				},
				{
					id: 'patek-philippe',
					name: 'Patek Philippe',
				},
				{
					id: 'journe',
					name: 'F.P. Journe',
				},
				{
					id: 'moser-cie',
					name: 'H. Moser & Cie.',
				},
				{
					id: 'lange-sohne',
					name: 'A. Lange & Söhne',
				},
				{
					id: 'vacheron-constantin',
					name: 'Vacheron Constantin',
				},
				{
					id: 'tudor',
					name: 'Tudor',
				},
				{
					id: 'breitling',
					name: 'Breitling',
				},
				{
					id: 'omega',
					name: 'Omega',
				},
				{
					id: 'greubel-forsey',
					name: 'Greubel Forsey',
				},
			],
		},
		allBrands: {
			title: 'BRANDS A-Z',
			links: [
				{
					id: 'all-brands',
					name: 'View All Brands',
				},
			],
		},
		footer: {
			contact: 'CONTACT US',
			about: 'ABOUT CULTURE',
			stores: 'OUR STORES',
			faq: 'FAQ',
		},
	};

	const navigate = useNavigate();

	//  STATES
	const [isUserLogged, setIsUserLogged] = useState(false);
	const [isHomePage, setIsHomePage] = useState(true);
	const [isScrollingDown, setIsScrollingDown] = useState(false);
	const [isScrollBelowThreshold, setIsScrollBelowThreshold] = useState(false);
	const [bodyOverflowHidden, setBodyOverflowHidden] = useState(false);
	const [isDropdownActive, setIsDropdownActive] = useState(false);
	const [isLoginActive, setIsLoginActive] = useState(false);
	const [isCartActive, setIsCartActive] = useState(false);
	const [isSearchActive, setIsSearchActive] = useState(false);

	//  USER
	const user = useSelector(selectCurrentToken);
	useEffect(() => {
		if (user != null) {
			setIsUserLogged(true);
		} else {
			setIsUserLogged(false);
		}
	}, [user]);

	//  NAVBAR THRESHOLD
	const navbarThreshold = 75;

	//  WINDOW LOCATION
	useWindowLocation(setIsHomePage, '/');

	//  SCROLL UPDATE
	useScrollUpdate(
		isScrollingDown,
		setIsScrollingDown,
		setIsScrollBelowThreshold,
		navbarThreshold,
	);

	//  BODY OVERFLOW
	useBodyOverflow(bodyOverflowHidden);

	//  BUTTONS HANDLERS
	const openSearch = useCallback(() => {
		setIsScrollBelowThreshold(true);
		setBodyOverflowHidden(true);
		setIsSearchActive(true);
	}, []);

	const closeSearch = useCallback(() => {
		if (window.scrollY <= navbarThreshold) {
			setIsScrollBelowThreshold(false);
		}
		setBodyOverflowHidden(false);
		setIsSearchActive(false);
	}, []);

	const openDropdown = useCallback(() => {
		if (isSearchActive) {
			closeSearch();
		}
		setBodyOverflowHidden(true);
		setIsDropdownActive(true);
	}, [isSearchActive, closeSearch]);

	const closeDropdown = useCallback(() => {
		setBodyOverflowHidden(false);
		setIsDropdownActive(false);
	}, []);

	const openLogin = useCallback(() => {
		if (isUserLogged) {
			if (isSearchActive) {
				closeSearch();
			}
			navigate('/profile');
		} else {
			if (isSearchActive) {
				closeSearch();
			}
			setBodyOverflowHidden(true);
			setIsLoginActive(true);
		}
	}, [isUserLogged, navigate, isSearchActive, closeSearch]);

	const closeLogin = useCallback(() => {
		setBodyOverflowHidden(false);
		setIsLoginActive(false);
	}, []);

	const openCart = useCallback(() => {
		if (isSearchActive) {
			closeSearch();
		}
		setBodyOverflowHidden(true);
		setIsCartActive(true);
	}, [isSearchActive, closeSearch]);

	const closeCart = useCallback(() => {
		setBodyOverflowHidden(false);
		setIsCartActive(false);
	}, []);

	return (
		<header
			id='navbar'
			className={`navbar ${isScrollingDown && isScrollBelowThreshold ? '' : 'nav-open'}`}>
			<nav
				className={`navbar__wrapper ${isHomePage && !isScrollBelowThreshold ? 'nav-top' : ''}`}>
				{/* MENU DESKTOP */}
				<MenuDesktop
					isUserLogged={isUserLogged}
					isDropdownActive={isDropdownActive}
					openDropdown={openDropdown}
					openLogin={openLogin}
					openCart={openCart}
					openSearch={openSearch}
					closeSearch={closeSearch}
					navbarMenu={navbarMenu}
				/>
				{/* MENU MOBILE */}
				<div
					className={`navbar__modal ${isDropdownActive ? 'active' : ''}`}
					onClick={closeDropdown}>
					<div
						className={`navbar__modal__inner ${isDropdownActive ? 'open' : ''}`}
						onClick={e => {
							e.stopPropagation();
						}}>
						<MenuMobile closeDropdown={closeDropdown} navbarMenu={navbarMenu} />
					</div>
				</div>
				{/* LOGIN MODAL */}
				<div
					className={`navbar__login ${isLoginActive ? 'active' : ''}`}
					onClick={closeLogin}>
					<div
						className={`navbar__login__inner ${isLoginActive ? 'open' : ''}`}
						onClick={e => {
							e.stopPropagation();
						}}>
						<LoginModal closeModal={closeLogin} />
					</div>
				</div>
				{/* CART MODAL */}
				<div
					className={`navbar__cart ${isCartActive ? 'active' : ''}`}
					onClick={closeCart}>
					<div
						className={`navbar__cart__inner ${isCartActive ? 'open' : ''}`}
						onClick={e => {
							e.stopPropagation();
						}}>
						<CartModal closeCart={closeCart} />
					</div>
				</div>
				{/* SEARCH MODAL */}
				<div
					className={`navbar__search ${isSearchActive ? 'active' : ''}`}
					onClick={closeSearch}>
					<div
						className={`navbar__search__inner ${isSearchActive ? 'open' : ''}`}
						onClick={e => {
							e.stopPropagation();
						}}>
						<SearchModal closeSearch={closeSearch} />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
