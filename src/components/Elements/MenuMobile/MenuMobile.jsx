import { NavLink } from 'react-router-dom';
import useToggle from '../../../hooks/useToggle.js';
import SocialLinks from '../SocialLinks/SocialLinks.jsx';
import PropTypes from 'prop-types';

const MenuMobile = ({ closeDropdown, navbarMenu }) => {
	//  BUTTONS HANDLERS
	const [isWatchesListActive, toggleWatchesList] = useToggle(false);
	const [isBrandsListActive, toggleBrandsList] = useToggle(false);

	return (
		<>
			<div className='navbar__modal__inner__header'>
				<h4>{navbarMenu.title}</h4>
				<div
					className='navbar__modal__inner__header__button'
					onClick={closeDropdown}>
					<img
						src={process.env.PUBLIC_URL + '/assets/icons/close.svg'}
						alt='close button'
					/>
				</div>
			</div>
			<nav className='navbar__modal__inner__scroll'>
				<ul className='navbar__modal__inner__links'>
					<li className='navbar__modal__inner__links__item'>
						<div className='navbar__modal__inner__links__item__link'>
							<NavLink
								to='/categories/new-arrivals'
								className='navbar__modal__inner__links__item__link__button'
								onClick={closeDropdown}>
								<p>{navbarMenu.categories.new}</p>
								<img
									src={process.env.PUBLIC_URL + '/assets/icons/arrow-right.svg'}
									alt='right arrow'
								/>
							</NavLink>
						</div>
					</li>
					<li className='navbar__modal__inner__links__item'>
						<div className='navbar__modal__inner__links__item__link'>
							<div
								className='navbar__modal__inner__links__item__link__button'
								onClick={toggleWatchesList}>
								<p>{navbarMenu.categories.all}</p>
								<img
									className={isWatchesListActive ? 'rotate' : ''}
									src={process.env.PUBLIC_URL + '/assets/icons/arrow-down.svg'}
									alt='down arrow'
								/>
							</div>
							<div
								className={`navbar__item__link__dropdown__list__items__inner ${isWatchesListActive ? 'list-open' : ''}`}>
								<ul className={isWatchesListActive ? 'open' : ''}>
									<h6>{navbarMenu.shopByCategory.title}</h6>
									{navbarMenu.shopByCategory.links.map((item, index) => (
										<li key={index}>
											<NavLink
												to={`/categories/${item.id}`}
												onClick={closeDropdown}>
												{item.name}
											</NavLink>
										</li>
									))}
									<h6>{navbarMenu.featuredCollections.title}</h6>
									{navbarMenu.featuredCollections.links.map((item, index) => (
										<li key={index}>
											<NavLink
												to={`/collections/${item.id}`}
												onClick={closeDropdown}>
												{item.name}
											</NavLink>
										</li>
									))}
								</ul>
							</div>
						</div>
					</li>
					<li className='navbar__modal__inner__links__item'>
						<div className='navbar__modal__inner__links__item__link'>
							<div
								className='navbar__modal__inner__links__item__link__button'
								onClick={toggleBrandsList}>
								<p>{navbarMenu.categories.brands}</p>
								<img
									className={isBrandsListActive ? 'rotate' : ''}
									src={process.env.PUBLIC_URL + '/assets/icons/arrow-down.svg'}
									alt='down arrow'
								/>
							</div>
							<div
								className={`navbar__item__link__dropdown__list__items__inner ${isBrandsListActive ? 'list-open' : ''}`}>
								<ul className={isBrandsListActive ? 'open' : ''}>
									<h6>{navbarMenu.featuredBrands.title}</h6>
									{navbarMenu.featuredBrands.links.map((item, index) => (
										<li key={index}>
											<NavLink
												to={`/brands/${item.id}`}
												onClick={closeDropdown}>
												{item.name}
											</NavLink>
										</li>
									))}
									<h6>{navbarMenu.allBrands.title}</h6>
									{navbarMenu.allBrands.links.map((item, index) => (
										<li key={index}>
											<NavLink
												to={`/brands/${item.id}`}
												onClick={closeDropdown}>
												{item.name}
											</NavLink>
										</li>
									))}
								</ul>
							</div>
						</div>
					</li>
				</ul>
				<div className='navbar__modal__inner__bottom'>
					<div className='navbar__modal__inner__image'>
						<img
							src={process.env.PUBLIC_URL + '/assets/images/img_2.webp'}
							alt='watch'
						/>
					</div>
					<div className='navbar__modal__inner__footer'>
						<NavLink to='/contact' onClick={closeDropdown}>
							{navbarMenu.footer.contact}
						</NavLink>
						<NavLink to='/about' onClick={closeDropdown}>
							{navbarMenu.footer.about}
						</NavLink>
						<NavLink to='/stores' onClick={closeDropdown}>
							{navbarMenu.footer.stores}
						</NavLink>
						<NavLink to='/faq' onClick={closeDropdown}>
							{navbarMenu.footer.faq}
						</NavLink>
					</div>
					<SocialLinks />
				</div>
			</nav>
		</>
	);
};

MenuMobile.propTypes = {
  closeDropdown: PropTypes.func.isRequired,
  navbarMenu: PropTypes.shape({
      title: PropTypes.string.isRequired,
      categories: PropTypes.shape({
          new: PropTypes.string.isRequired,
          all: PropTypes.string.isRequired,
          brands: PropTypes.string.isRequired,
      }).isRequired,
      shopByCategory: PropTypes.shape({
          title: PropTypes.string.isRequired,
          links: PropTypes.arrayOf(
              PropTypes.shape({
                  id: PropTypes.string.isRequired,
                  name: PropTypes.string.isRequired,
              })
          ).isRequired,
      }).isRequired,
      featuredCollections: PropTypes.shape({
          title: PropTypes.string.isRequired,
          links: PropTypes.arrayOf(
              PropTypes.shape({
                  id: PropTypes.string.isRequired,
                  name: PropTypes.string.isRequired,
              })
          ).isRequired,
      }).isRequired,
      featuredBrands: PropTypes.shape({
          title: PropTypes.string.isRequired,
          links: PropTypes.arrayOf(
              PropTypes.shape({
                  id: PropTypes.string.isRequired,
                  name: PropTypes.string.isRequired,
              })
          ).isRequired,
      }).isRequired,
      allBrands: PropTypes.shape({
          title: PropTypes.string.isRequired,
          links: PropTypes.arrayOf(
              PropTypes.shape({
                  id: PropTypes.string.isRequired,
                  name: PropTypes.string.isRequired,
              })
          ).isRequired,
      }).isRequired,
      footer: PropTypes.shape({
          contact: PropTypes.string.isRequired,
          about: PropTypes.string.isRequired,
          stores: PropTypes.string.isRequired,
          faq: PropTypes.string.isRequired,
      }).isRequired,
  }).isRequired,
};

export default MenuMobile;
