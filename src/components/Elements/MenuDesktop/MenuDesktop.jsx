import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuDesktop = ({
	isDropdownActive,
	openDropdown,
	openLogin,
	openCart,
	openSearch,
	closeSearch,
	navbarMenu,
}) => {
	return (
		<>
			<div className='navbar__body'>
				<nav className='navbar__body__left'>
					<ul className='navbar__items'>
						<li className='navbar__item__menu'>
							<button
								className={`navbar__item__menu__button ${isDropdownActive ? 'active' : ''}`}
								onClick={openDropdown}>
								<div className='navbar__item__menu__button__up'></div>
								<div className='navbar__item__menu__button__down'></div>
							</button>
						</li>
						<li className='navbar__item__icon'>
							<NavLink to='/profile/wishlist'>
								<img
									src={process.env.PUBLIC_URL + '/assets/icons/clock.svg'}
									alt='wishlist button'
								/>
							</NavLink>
						</li>
					</ul>
				</nav>
				<NavLink to='/' className='navbar__body__logo'>
					{navbarMenu.company}
				</NavLink>
				<nav className='navbar__body__center'>
					<ul className='navbar__items'>
						<li className='navbar__item__link'>
							<NavLink to='/categories/new-arrivals'>
								{navbarMenu.categories.new}
							</NavLink>
						</li>
						<li className='navbar__item__link'>
							<NavLink to='/categories/all-watches'>
								{navbarMenu.categories.all}
							</NavLink>
							<div className='navbar__item__link__dropdown'>
								<div className='navbar__item__link__dropdown__img'>
									<img
										src={process.env.PUBLIC_URL + '/assets/images/img_4.webp'}
										alt='watch collection'
									/>
								</div>
								<div className='navbar__item__link__dropdown__list'>
									<div className='navbar__item__link__dropdown__list__items'>
										<div className='navbar__item__link__dropdown__list__items__inner'>
											<h5>{navbarMenu.shopByCategory.title}</h5>
											<ul>
												{navbarMenu.shopByCategory.links.map((item, index) => (
													<li key={index}>
														<NavLink to={`/categories/${item.id}`}>
															{item.name}
														</NavLink>
													</li>
												))}
											</ul>
										</div>
									</div>
									<div className='navbar__item__link__dropdown__list__items__pattern'></div>
									<div className='navbar__item__link__dropdown__list__items'>
										<div className='navbar__item__link__dropdown__list__items__inner'>
											<h5>{navbarMenu.featuredCollections.title}</h5>
											<ul>
												{navbarMenu.featuredCollections.links.map(
													(item, index) => (
														<li key={index}>
															<NavLink to={`/collections/${item.id}`}>
																{item.name}
															</NavLink>
														</li>
													),
												)}
											</ul>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className='navbar__item__link'>
							<NavLink to='/brands/all-brands'>
								{navbarMenu.categories.brands}
							</NavLink>
							<div className='navbar__item__link__dropdown'>
								<div className='navbar__item__link__dropdown__list'>
									<div className='navbar__item__link__dropdown__list__items'>
										<div className='navbar__item__link__dropdown__list__items__inner'>
											<h5>{navbarMenu.featuredBrands.title}</h5>
											<ul>
												{navbarMenu.featuredBrands.links.map((item, index) => (
													<li key={index}>
														<NavLink to={`/brands/${item.id}`}>
															{item.name}
														</NavLink>
													</li>
												))}
											</ul>
										</div>
									</div>
									<div className='navbar__item__link__dropdown__list__items__pattern'></div>
									<div className='navbar__item__link__dropdown__list__items'>
										<div className='navbar__item__link__dropdown__list__items__inner'>
											<h5>{navbarMenu.allBrands.title}</h5>
											<ul>
												{navbarMenu.allBrands.links.map((item, index) => (
													<li key={index}>
														<NavLink to={`/brands/${item.id}`}>
															{item.name}
														</NavLink>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
								<div className='navbar__item__link__dropdown__img'>
									<img
										src={process.env.PUBLIC_URL + '/assets/images/img_9.webp'}
										alt='watch and compass'
									/>
								</div>
							</div>
						</li>
						<li className='navbar__item__link'>
							<div
								className='navbar__search__container'
								onClick={e => {
									e.stopPropagation();
								}}>
								<form className='navbar__search__form'>
									<div className='navbar__search__form__field'>
										<input type='text' onClick={openSearch}></input>
										<label></label>
									</div>
									<button className='navbar__search__form__button'>
										<img
											src={process.env.PUBLIC_URL + '/assets/icons/search.svg'}
											alt='search button'
										/>
									</button>
								</form>
							</div>
						</li>
					</ul>
				</nav>
				<nav className='navbar__body__right'>
					<ul className='navbar__items'>
						<li className='navbar__item__icon tablet__only'>
							<div
								className='navbar__search__container'
								onClick={e => {
									e.stopPropagation();
								}}>
								<form className='navbar__search__form'>
									<div className='navbar__search__form__field'>
										<input type='text' onClick={openSearch}></input>
										<label></label>
									</div>
									<button className='navbar__search__form__button'>
										<img
											src={process.env.PUBLIC_URL + '/assets/icons/search.svg'}
											alt='search button'
										/>
									</button>
								</form>
							</div>
						</li>
						<li className='navbar__item__icon desktop__only'>
							<NavLink to='/profile/wishlist'>
								<img
									src={process.env.PUBLIC_URL + '/assets/icons/clock.svg'}
									alt='wishlist button'
								/>
							</NavLink>
						</li>
						<li className='navbar__item__icon'>
							<button onClick={openLogin}>
								<img
									src={process.env.PUBLIC_URL + '/assets/icons/user.svg'}
									alt='account button'
								/>
							</button>
						</li>
						<li className='navbar__item__icon'>
							<button onClick={openCart}>
								<img
									src={process.env.PUBLIC_URL + '/assets/icons/cart.svg'}
									alt='cart button'
								/>
							</button>
						</li>
						<li className='navbar__item__menu tablet__only'>
							<button
								className={`navbar__item__menu__button ${isDropdownActive ? 'active' : ''}`}
								onClick={openDropdown}>
								<div className='navbar__item__menu__button__up'></div>
								<div className='navbar__item__menu__button__down'></div>
							</button>
						</li>
					</ul>
				</nav>
			</div>
			<div className='navbar__footer'>
				<div
					className='navbar__search__container'
					onClick={e => {
						e.stopPropagation();
					}}>
					<form className='navbar__search__form'>
						<div className='navbar__search__form__field'>
							<input type='text' onClick={openSearch}></input>
							<label></label>
						</div>
						<button className='navbar__search__form__button'>
							<img
								src={process.env.PUBLIC_URL + '/assets/icons/search.svg'}
								alt='search button'
							/>
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

MenuDesktop.propTypes = {
  isDropdownActive: PropTypes.bool.isRequired,
  openDropdown: PropTypes.func.isRequired,
  openLogin: PropTypes.func.isRequired,
  openCart: PropTypes.func.isRequired,
  openSearch: PropTypes.func.isRequired,
  closeSearch: PropTypes.func.isRequired,
  navbarMenu: PropTypes.shape({
      company: PropTypes.string.isRequired,
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
  }).isRequired,
};

export default MenuDesktop;
