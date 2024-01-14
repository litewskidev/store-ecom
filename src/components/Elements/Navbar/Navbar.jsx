import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const navbarRef = useRef(null);
  const dropdownBtnRefMobile = useRef(null);
  const dropdownBtnRefTablet = useRef(null);
  const dropdownModalRef = useRef(null);
  const dropdownModalInnerRef = useRef(null);
  const watchesListRef = useRef(null);
  const brandsListRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const dropdownModal = dropdownModalRef.current;
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if(direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    const scrollHeader = () => {
      if(window.scrollY < 60) {
        navbar.classList.add('nav-top');
      }
      else {
        navbar.classList.remove('nav-top');
      }
      if(dropdownModal.classList.contains('active')) {
        navbar.classList.remove('nav-top');
      }
    };

    window.addEventListener("scroll", updateScrollDirection, scrollHeader);

    if(scrollDirection === 'down') {
      navbar.classList.add('nav-close');
    }
    else {
      navbar.classList.remove('nav-close');
    }

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
      window.addEventListener("scroll", scrollHeader);
    }
  }, [scrollDirection]);

  const toggleDropdown = () => {
    const dropdownBtnMobile = dropdownBtnRefMobile.current;
    const dropdownBtnTablet = dropdownBtnRefTablet.current;
    const dropdownModal = dropdownModalRef.current;
    const dropdownModalInner = dropdownModalInnerRef.current;
    const navbar = navbarRef.current;

    dropdownBtnMobile.classList.toggle('active')
    dropdownBtnTablet.classList.toggle('active');
    dropdownModal.classList.toggle('active');
    dropdownModalInner.classList.toggle('open');

    if(dropdownModal.classList.contains('active')) {
      document.body.style.overflow = "hidden";
      navbar.classList.remove('nav-top');
    }
    else {
      document.body.style.overflow = "scroll";
      if(window.scrollY < 60) {
        navbar.classList.add('nav-top');
      }
    }
  };

  const toggleWatchesList = () => {
    const watchesList = watchesListRef.current;
    watchesList.classList.toggle('list-open');
  }

  const toggleBrandsList = () => {
    const brandsList = brandsListRef.current;
    brandsList.classList.toggle('list-open');
  }

  return(
    <div id='navbar' className='navbar nav-top' ref={navbarRef}>
      <div className='navbar__wrapper'>
        <div className='navbar__body'>
          <nav className='navbar__body__left'>
            <ul className='navbar__items'>
              <li className='navbar__item__menu'>
                <button className='navbar__item__menu__button' onClick={toggleDropdown} ref={dropdownBtnRefMobile}>
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
                <NavLink to='/shop/new-arrivals'>NEW ARRIVALS</NavLink>
              </li>
              <li className='navbar__item__link'>
                <NavLink to='/shop/all-watches'>ALL WATCHES</NavLink>
                <div className='navbar__item__link__dropdown'>
                  <div className='navbar__item__link__dropdown__img'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/img_4.jpg'} alt='' />
                  </div>
                  <div className='navbar__item__link__dropdown__list'>
                    <div className='navbar__item__link__dropdown__list__items'>
                      <div className='navbar__item__link__dropdown__list__items__inner'>
                        <h4>SHOP BY CATEGORY</h4>
                        <ul>
                          <li>All Watches</li>
                          <li>New Arrivals</li>
                          <li>Coming Soon</li>
                          <li>Best Sellers</li>
                          <li>Men's Watches</li>
                          <li>Women's Watches</li>
                          <li>Sale</li>
                        </ul>
                      </div>
                    </div>
                    <div className='navbar__item__link__dropdown__list__items__pattern'></div>
                    <div className='navbar__item__link__dropdown__list__items'>
                      <div className='navbar__item__link__dropdown__list__items__inner'>
                        <h4>FEATURED COLLECTIONS</h4>
                        <ul>
                          <li>Grail Watches</li>
                          <li>Independent Watches</li>
                          <li>Anything But Ordinary</li>
                          <li>Daily Drivers</li>
                          <li>The Holy Trinity</li>
                          <li>View All Collections</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className='navbar__item__link'>
                <NavLink to='/watches/all-brands'>BRANDS</NavLink>
                <div className='navbar__item__link__dropdown'>
                  <div className='navbar__item__link__dropdown__list'>
                    <div className='navbar__item__link__dropdown__list__items'>
                      <div className='navbar__item__link__dropdown__list__items__inner'>
                        <h4>FEATURED BRANDS</h4>
                        <ul>
                          <li>Rolex</li>
                          <li>Audemars Piguet</li>
                          <li>De Bethune</li>
                          <li>Patek Philippe</li>
                          <li>F.P. Journe</li>
                          <li>H. Moser & Cie.</li>
                          <li>A. Lange & Söhne</li>
                          <li>Vacheron Constantin</li>
                          <li>Tudor</li>
                          <li>Breitling</li>
                          <li>Omega</li>
                          <li>Greubel Forsey</li>
                        </ul>
                      </div>
                    </div>
                    <div className='navbar__item__link__dropdown__list__items__pattern'></div>
                    <div className='navbar__item__link__dropdown__list__items'>
                      <div className='navbar__item__link__dropdown__list__items__inner'>
                        <h4>BRANDS A-Z</h4>
                        <ul>
                          <li>View All Brands</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='navbar__item__link__dropdown__img'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/img_9.jpg'} alt='' />
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
                <button className='navbar__item__menu__button' onClick={toggleDropdown} ref={dropdownBtnRefTablet}>
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
        <div id='navbar-modal' className='navbar__modal' ref={dropdownModalRef}>
          <div className='navbar__modal__inner' ref={dropdownModalInnerRef}>
            <div className='navbar__mobile__scroll'>
              <h2>MENU</h2>
              <nav className='navbar__modal__inner__nav'>
                <ul className='navbar__modal__inner__links'>
                  <li className='navbar__modal__inner__links__item'>
                    <div className='navbar__modal__inner__links__item__link'>
                      <NavLink to='/shop/new-arrivals'>NEW ARRIVALS</NavLink>
                    </div>
                  </li>
                  <li className='navbar__modal__inner__links__item'>
                    <div className='navbar__modal__inner__links__item__link'>
                      <NavLink onClick={toggleWatchesList}>ALL WATCHES</NavLink>
                      <div className='navbar__item__link__dropdown__list__items__inner' ref={watchesListRef}>
                        <ul>
                          <h4>SHOP BY CATEGORY</h4>
                          <li>All Watches</li>
                          <li>New Arrivals</li>
                          <li>Coming Soon</li>
                          <li>Best Sellers</li>
                          <li>Men's Watches</li>
                          <li>Women's Watches</li>
                          <li>Sale</li>
                          <h4>FEATURED COLLECTIONS</h4>
                          <li>Grail Watches</li>
                          <li>Independent Watches</li>
                          <li>Anything But Ordinary</li>
                          <li>Daily Drivers</li>
                          <li>The Holy Trinity</li>
                          <li>View All Collections</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className='navbar__modal__inner__links__item'>
                    <div className='navbar__modal__inner__links__item__link'>
                      <NavLink onClick={toggleBrandsList}>BRANDS</NavLink>
                      <div className='navbar__item__link__dropdown__list__items__inner' ref={brandsListRef}>
                        <ul>
                          <h4>FEATURED BRANDS</h4>
                          <li>Rolex</li>
                          <li>Audemars Piguet</li>
                          <li>De Bethune</li>
                          <li>Patek Philippe</li>
                          <li>F.P. Journe</li>
                          <li>H. Moser & Cie.</li>
                          <li>A. Lange & Söhne</li>
                          <li>Vacheron Constantin</li>
                          <li>Tudor</li>
                          <li>Breitling</li>
                          <li>Omega</li>
                          <li>Greubel Forsey</li>
                          <h4>BRANDS A-Z</h4>
                          <li>View All Brands</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className='navbar__modal__inner__image'>
                <img src={process.env.PUBLIC_URL + '/assets/images/img_2.jpg'} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
