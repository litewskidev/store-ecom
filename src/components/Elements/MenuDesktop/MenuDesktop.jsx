import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MenuDesktop.scss';

const MenuDesktop = memo(({ isDropdownActive, toggleDropdown, toggleLogin, toggleCart, navbarMenu }) => {
  return(
    <>
      <div className='navbar__body'>
        <nav className='navbar__body__left'>
          <ul className='navbar__items'>
            <li className='navbar__item__menu'>
              <button className={`navbar__item__menu__button ${isDropdownActive ? 'active' : ''}`} onClick={toggleDropdown}>
                <div className='navbar__item__menu__button__up'></div>
                <div className='navbar__item__menu__button__down'></div>
              </button>
            </li>
            <li className='navbar__item__icon'>
              <NavLink to='/profile/wishlist'>
                <img src={process.env.PUBLIC_URL + '/assets/icons/clock.svg'} alt='wishlist button' />
              </NavLink>
            </li>
          </ul>
        </nav>
        <NavLink to='/' className='navbar__body__logo'>CULTURE</NavLink>
        <nav className='navbar__body__center'>
          <ul className='navbar__items'>
            <li className='navbar__item__link'>
              <NavLink to='/categories/new-arrivals'>NEW ARRIVALS</NavLink>
            </li>
            <li className='navbar__item__link'>
              <NavLink to='/watches/all-watches'>ALL WATCHES</NavLink>
              <div className='navbar__item__link__dropdown'>
                <div className='navbar__item__link__dropdown__img'>
                  <img src={process.env.PUBLIC_URL + '/assets/images/img_4.webp'} alt='watch collection' />
                </div>
                <div className='navbar__item__link__dropdown__list'>
                  <div className='navbar__item__link__dropdown__list__items'>
                    <div className='navbar__item__link__dropdown__list__items__inner'>
                      <h4>{navbarMenu.shopByCategory.title}</h4>
                      <ul>
                        {navbarMenu.shopByCategory.links.map((item, index) => (
                          <li key={index}>
                            <NavLink to={`/categories/${item.id}`}>{item.name}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className='navbar__item__link__dropdown__list__items__pattern'></div>
                  <div className='navbar__item__link__dropdown__list__items'>
                    <div className='navbar__item__link__dropdown__list__items__inner'>
                      <h4>{navbarMenu.featuredCollections.title}</h4>
                      <ul>
                        {navbarMenu.featuredCollections.links.map((item, index) => (
                          <li key={index}>
                            <NavLink to={`/collections/${item.id}`}>{item.name}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='navbar__item__link'>
              <NavLink to='/brands/all-brands'>BRANDS</NavLink>
              <div className='navbar__item__link__dropdown'>
                <div className='navbar__item__link__dropdown__list'>
                  <div className='navbar__item__link__dropdown__list__items'>
                    <div className='navbar__item__link__dropdown__list__items__inner'>
                      <h4>{navbarMenu.featuredBrands.title}</h4>
                      <ul>
                        {navbarMenu.featuredBrands.links.map((item, index) => (
                          <li key={index}>
                            <NavLink to={`/brands/${item.id}`}>{item.name}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className='navbar__item__link__dropdown__list__items__pattern'></div>
                  <div className='navbar__item__link__dropdown__list__items'>
                    <div className='navbar__item__link__dropdown__list__items__inner'>
                      <h4>{navbarMenu.allBrands.title}</h4>
                      <ul>
                        {navbarMenu.allBrands.links.map((item, index) => (
                          <li key={index}>
                            <NavLink to={`/brands/${item.id}`}>{item.name}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='navbar__item__link__dropdown__img'>
                  <img src={process.env.PUBLIC_URL + '/assets/images/img_9.webp'} alt='watch and compass' />
                </div>
              </div>
            </li>
            <li className='navbar__item__link'>
              <div className='navbar__search__container'>
                <form className='navbar__search__form'>
                  <div className='navbar__search__form__field'>
                    <input type='text'></input>
                    <label></label>
                  </div>
                  <button className='navbar__search__form__button'>
                    <img src={process.env.PUBLIC_URL + '/assets/icons/search.svg'} alt='search button' />
                  </button>
                </form>
              </div>
            </li>
          </ul>
        </nav>
        <nav className='navbar__body__right'>
          <ul className='navbar__items'>
            <li className='navbar__item__icon tablet__only'>
              <div className='navbar__search__container'>
                <form className='navbar__search__form'>
                  <div className='navbar__search__form__field'>
                    <input type='text'></input>
                    <label></label>
                  </div>
                  <button className='navbar__search__form__button'>
                    <img src={process.env.PUBLIC_URL + '/assets/icons/search.svg'} alt='search button' />
                  </button>
                </form>
              </div>
            </li>
            <li className='navbar__item__icon desktop__only'>
              <NavLink to='/profile/wishlist'>
                <img src={process.env.PUBLIC_URL + '/assets/icons/clock.svg'} alt='wishlist button' />
              </NavLink>
            </li>
            <li className='navbar__item__icon'>
              <button onClick={toggleLogin}>
                <img src={process.env.PUBLIC_URL + '/assets/icons/user.svg'} alt='account button' />
              </button>
            </li>
            <li className='navbar__item__icon'>
              <button onClick={toggleCart}>
                <img src={process.env.PUBLIC_URL + '/assets/icons/cart.svg'} alt='cart button' />
              </button>
            </li>
            <li className='navbar__item__menu tablet__only'>
              <button className={`navbar__item__menu__button ${isDropdownActive ? 'active' : ''}`} onClick={toggleDropdown}>
                <div className='navbar__item__menu__button__up'></div>
                <div className='navbar__item__menu__button__down'></div>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className='navbar__footer'>
        <div className='navbar__search__container'>
          <form className='navbar__search__form'>
            <div className='navbar__search__form__field'>
              <input
              type='text'
              placeholder='Search'
              ></input>
              <label></label>
            </div>
            <button className='navbar__search__form__button'>
              <img src={process.env.PUBLIC_URL + '/assets/icons/search.svg'} alt='search button' />
            </button>
          </form>
        </div>
      </div>
    </>
  );
});

MenuDesktop.propTypes = {
  isDropdownActive: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  toggleLogin: PropTypes.func.isRequired,
  toggleCart: PropTypes.func.isRequired,
  navbarMenu: PropTypes.shape({
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
