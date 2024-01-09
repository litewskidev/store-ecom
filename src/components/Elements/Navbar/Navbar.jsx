import { useRef } from 'react';
import './Navbar.scss';

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
    <div className='navbar__wrapper'>
      <nav className='navbar__nav'>
        <div className='navbar__nav__logo'>
          <h1>CULTURE</h1>
        </div>
        <div className='navbar__nav__controls'>
          <div className='navbar__nav__controls__profile-btn'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/user.svg'} alt='profile button'/>
          </div>
          <div className='navbar__nav__controls__dropdown-btn' ref={dropdownBtnRef} onClick={toggleDropdown}>
            <div className='navbar__nav__controls__dropdown-btn__up'></div>
            <div className='navbar__nav__controls__dropdown-btn__down'></div>
          </div>
        </div>
      </nav>
      <nav className='navbar__menu' ref={dropdownRef}>
        <div className='navbar__menu__list'>
          <div className='navbar__menu__list__item'>
            <div className='navbar__menu__list__item__title'>
              <div className='navbar__menu__list__item__title__text'>

              </div>
              <div className='navbar__menu__list__item__title__icon'>

              </div>
            </div>
            <div className='navbar__menu__list__item__content'>
              <ul>

              </ul>
            </div>
          </div>

          <div className='navbar__menu__list__item'>
            <div className='navbar__menu__list__item__title'>
              <div className='navbar__menu__list__item__title__text'>

              </div>
              <div className='navbar__menu__list__item__title__icon'>

              </div>
            </div>
            <div className='navbar__menu__list__item__content'>
              <ul>

              </ul>
            </div>
          </div>

          <div className='navbar__menu__list__item'>
            <div className='navbar__menu__list__item__title'>
              <div className='navbar__menu__list__item__title__text'>

              </div>
              <div className='navbar__menu__list__item__title__icon'>

              </div>
            </div>
            <div className='navbar__menu__list__item__content'>
              <ul>

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
