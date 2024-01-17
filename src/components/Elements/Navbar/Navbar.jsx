import { useCallback, useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { NavLink, useNavigate } from 'react-router-dom';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import SocialLinks from '../SocialLinks/SocialLinks.jsx';
import './Navbar.scss';

const Navbar = () => {
  const user = false;

  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const [bodyOverflowHidden, setBodyOverflowHidden] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [isWatchesListActive, setIsWatchesListActive] = useState(false);
  const [isBrandsListActive, setIsBrandsListActive] = useState(false);

  const scrollThreshold = 5;
  const navbarThreshold = 60;

  useEffect(() => {
    document.body.style.overflow = bodyOverflowHidden ? 'hidden' : 'scroll';
  }, [bodyOverflowHidden]);

  useEffect(() => {
    const navbar = navbarRef.current;
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';

      if(Math.abs(scrollY - lastScrollY) > scrollThreshold && direction !== scrollDirection) {
        setScrollDirection(direction);
      }

      lastScrollY = Math.max(0, scrollY);
    };

    const updateScrollHeader = () => {
      const isScrollBelow = window.scrollY >= navbarThreshold;
      navbar.classList.toggle('nav-top', !isScrollBelow);
    };

    const handleScroll = debounce(() => {
      updateScrollDirection();
      updateScrollHeader();
      navbar.classList.toggle('nav-close', scrollDirection === 'down');
    }, scrollThreshold);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, [scrollDirection]);

  const toggleLogin = useCallback(() => {
    if(user) {
      navigate('/profile');
    }
    else {
      setBodyOverflowHidden(prev => !prev);
      setIsLoginActive(prev => !prev);
    }
  }, [user, navigate]);

  const toggleDropdown = useCallback(() => {
    const navbar = navbarRef.current;
    setBodyOverflowHidden(prev => !prev);
    setIsDropdownActive(prev => !prev);

    if(window.scrollY < navbarThreshold) {
      navbar.classList.toggle('nav-top');
    }
  }, [navbarThreshold]);

  const toggleWatchesList = useCallback(() => {
    setIsWatchesListActive(prev => !prev);
  }, []);

  const toggleBrandsList = useCallback(() => {
    setIsBrandsListActive(prev => !prev);
  }, []);

  const navbarMenu = {
    shopByCategory: {
      title: 'SHOP BY CATEGORY',
      links: [
        {
          id: 'all-watches',
          name: 'All Watches'
        },
        {
          id: 'new-arrivals',
          name: 'New Arrivals'
        },
        {
          id: 'coming-soon',
          name: 'Coming Soon'
        },
        {
          id: 'best-sellers',
          name: 'Best Sellers'
        },
        {
          id: 'men-watches',
          name: `Men's Watches`
        },
        {
          id: 'women-watches',
          name: `Women's Watches`
        },
        {
          id: 'sale',
          name: 'Sale'
        }
      ]
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
        }
      ]
    },
    featuredBrands: {
      title: 'FEATURED BRANDS',
      links: [
        {
          id: 'rolex',
          name: 'Rolex'
        },
        {
          id: 'audemars-piguet',
          name: 'Audemars Piguet'
        },
        {
          id: 'de-bethune',
          name: 'De Bethune'
        },
        {
          id: 'patek-philippe',
          name: 'Patek Philippe'
        },
        {
          id: 'journe',
          name: 'F.P. Journe'
        },
        {
          id: 'moser&cie',
          name: 'H. Moser & Cie.'
        },
        {
          id: 'lange&sohne',
          name: 'A. Lange & Söhne'
        },
        {
          id: 'vacheron-constantin',
          name: 'Vacheron Constantin'
        },
        {
          id: 'tudor',
          name: 'Tudor'
        },
        {
          id: 'breitling',
          name: 'Breitling'
        },
        {
          id: 'omega',
          name: 'Omega'
        },
        {
          id: 'greubel-forsey',
          name: 'Greubel Forsey'
        }
      ]
    },
    allBrands: {
      title: 'BRANDS A-Z',
      links: [
        {
          id: 'all-brands',
          name: 'View All Brands'
        }
      ]
    }
  };

  return(
    <div id='navbar' className='navbar nav-top' ref={navbarRef}>
      <div className='navbar__wrapper'>
        <div className='navbar__body'>
          <nav className='navbar__body__left'>
            <ul className='navbar__items'>
              <li className='navbar__item__menu'>
                <button className={isDropdownActive ? 'navbar__item__menu__button active' : 'navbar__item__menu__button'} onClick={toggleDropdown}>
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
                <NavLink to='/categories/all-watches'>ALL WATCHES</NavLink>
                <div className='navbar__item__link__dropdown'>
                  <div className='navbar__item__link__dropdown__img'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/img_4.webp'} alt='' />
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
                    <img src={process.env.PUBLIC_URL + '/assets/images/img_9.webp'} alt='' />
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
                <button to='/profile' onClick={toggleLogin}>
                  <img src={process.env.PUBLIC_URL + '/assets/icons/user.svg'} alt='account button' />
                </button>
              </li>
              <li className='navbar__item__icon'>
                <NavLink to='/cart'>
                  <img src={process.env.PUBLIC_URL + '/assets/icons/cart.svg'} alt='cart button' />
                </NavLink>
              </li>
              <li className='navbar__item__menu tablet__only'>
                <button className={isDropdownActive ? 'navbar__item__menu__button active' : 'navbar__item__menu__button'} onClick={toggleDropdown}>
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
        <div id='navbar-modal' className={isDropdownActive ? 'navbar__modal active' : 'navbar__modal'}>
          <div className={isDropdownActive ? 'navbar__modal__inner open' : 'navbar__modal__inner'}>
            <div className='navbar__mobile__scroll'>
              <h1>MENU</h1>
              <nav className='navbar__modal__inner__nav'>
                <ul className='navbar__modal__inner__links'>
                  <li className='navbar__modal__inner__links__item'>
                    <div className='navbar__modal__inner__links__item__link'>
                      <NavLink to='/categories/new-arrivals' className='navbar__modal__inner__links__item__link__button'>
                        <p>NEW ARRIVALS</p>
                        <img src={process.env.PUBLIC_URL + '/assets/icons/arrow-right.svg'} alt='' />
                      </NavLink>
                    </div>
                  </li>
                  <li className='navbar__modal__inner__links__item'>
                    <div className='navbar__modal__inner__links__item__link'>
                      <div className='navbar__modal__inner__links__item__link__button' onClick={toggleWatchesList}>
                        <p>ALL WATCHES</p>
                        <img className={isWatchesListActive ? 'rotate' : ''} src={process.env.PUBLIC_URL + '/assets/icons/arrow-down.svg'} alt='' />
                      </div>
                      <div className={isWatchesListActive ? 'navbar__item__link__dropdown__list__items__inner list-open' : 'navbar__item__link__dropdown__list__items__inner'}>
                        <ul>
                          <h4>{navbarMenu.shopByCategory.title}</h4>
                            {navbarMenu.shopByCategory.links.map((item, index) => (
                              <li key={index}>
                                <NavLink to={`/categories/${item.id}`}>{item.name}</NavLink>
                              </li>
                            ))}
                          <h4>{navbarMenu.featuredCollections.title}</h4>
                            {navbarMenu.featuredCollections.links.map((item, index) => (
                              <li key={index}>
                                <NavLink to={`/collections/${item.id}`}>{item.name}</NavLink>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className='navbar__modal__inner__links__item'>
                    <div className='navbar__modal__inner__links__item__link'>
                      <div className='navbar__modal__inner__links__item__link__button'  onClick={toggleBrandsList}>
                        <p>BRANDS</p>
                        <img className={isBrandsListActive ? 'rotate' : ''} src={process.env.PUBLIC_URL + '/assets/icons/arrow-down.svg'} alt='' />
                      </div>
                      <div className={isBrandsListActive ? 'navbar__item__link__dropdown__list__items__inner list-open' : 'navbar__item__link__dropdown__list__items__inner'}>
                        <ul>
                          <h4>{navbarMenu.featuredBrands.title}</h4>
                            {navbarMenu.featuredBrands.links.map((item, index) => (
                              <li key={index}>
                                <NavLink to={`/brands/${item.id}`}>{item.name}</NavLink>
                              </li>
                            ))}
                          <h4>{navbarMenu.allBrands.title}</h4>
                            {navbarMenu.allBrands.links.map((item, index) => (
                              <li key={index}>
                                <NavLink to={`/brands/${item.id}`}>{item.name}</NavLink>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className='navbar__modal__inner__image'>
                <img src={process.env.PUBLIC_URL + '/assets/images/img_2.webp'} alt='' />
              </div>
              <div className='navbar__modal__inner__footer'>
                <NavLink to='/contact'>CONTACT US</NavLink>
                <NavLink to='/about'>ABOUT CULTURE</NavLink>
                <NavLink to='/stores'>OUR STORES</NavLink>
                <NavLink to='/faq'>FAQ</NavLink>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className={isLoginActive ? 'navbar__login active' : 'navbar__login'}>
          <div className={isLoginActive ? 'navbar__login__inner open' : 'navbar__login__inner'}>
            <Login handleBtn={toggleLogin} />
          </div>
        </div>
        <div className='navbar__register'>
          <Register />
        </div>
        <div className='navbar__cart'>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
