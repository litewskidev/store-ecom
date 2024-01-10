import { useRef } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const dropdownBtnRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    const dropdownBtn = dropdownBtnRef.current;
    const dropdown = dropdownRef.current;
    dropdownBtn.classList.toggle('active');
    dropdown.classList.toggle('active');
  };

  return(
    <div className='navbar'>
      <div className='navbar__wrapper'>
        <div className='navbar__body'>
          <nav className='navbar__body__left'>
            <ul className='navbar__items'>
              <li className='navbar__item__menu'>
                <button className='navbar__button'>
                  <div className='navbar__button__up'></div>
                  <div className='navbar__button__down'></div>
                </button>
              </li>
              <li className='navbar__item__icon'>
                <NavLink className='navbar__item__icon__wishlist' to='/profile/wishlist'>
                  <img src={process.env.PUBLIC_URL + '/assets/icons/clock.svg'} alt='wishlist button' />
                </NavLink>
              </li>
            </ul>
          </nav>

          <h1 className='navbar__body__logo'>CULTURE</h1>

          <nav className='navbar__body__center'>
            <ul className='navbar__items'>
              <li className='navbar__item__link'>
                <NavLink to='/shop/new-arrivals'>NEW ARRIVALS</NavLink>
              </li>
              <li className='navbar__item__link'>
                <NavLink to='/shop/all-watches'>ALL WATCHES</NavLink>
              </li>
              <li className='navbar__item__link'>
                <NavLink to='/watches/all-brands'>BRANDS</NavLink>
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
                <NavLink className='navbar__item__icon__wishlist' to='/profile/wishlist'>
                  <img src={process.env.PUBLIC_URL + '/assets/icons/clock.svg'} alt='wishlist button' />
                </NavLink>
              </li>
              <li className='navbar__item__icon'>
                <NavLink to='/profile'>
                  <img src={process.env.PUBLIC_URL + '/assets/icons/user.svg'} alt='account button' />
                </NavLink>
              </li>
              <li className='navbar__item__icon'>
                <NavLink to='/cart'>
                  <img src={process.env.PUBLIC_URL + '/assets/icons/cart.svg'} alt='cart button' />
                </NavLink>
              </li>
              <li className='navbar__item__menu tablet__only'>
                <button className='navbar__button'>
                  <div className='navbar__button__up'></div>
                  <div className='navbar__button__down'></div>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className='navbar__footer'></div>
      </div>
    </div>
  );
};

export default Navbar;
