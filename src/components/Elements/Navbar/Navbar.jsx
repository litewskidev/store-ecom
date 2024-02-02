import { useCallback, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useWindowLocation from '../../../hooks/useWindowLocation.js';
import useScrollUpdate from '../../../hooks/useScrollUpdate.js';
import useBodyOverflow from '../../../hooks/useBodyOverflow.js';
import MenuDesktop from '../MenuDesktop/MenuDesktop.jsx';
import MenuMobile from '../MenuMobile/MenuMobile.jsx';
import LoginModal from '../LoginModal/LoginModal.jsx';
import CartModal from '../CartModal/CartModal.jsx';
import './Navbar.scss';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  //  STATES
  const [user, setUser] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isScrollBelowThreshold, setIsScrollBelowThreshold] = useState(false);
  const [bodyOverflowHidden, setBodyOverflowHidden] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);

  //  CONSTANTS
  const scrollThreshold = 5;
  const navbarThreshold = 75;

  //  WINDOW LOCATION
  useWindowLocation(location, setIsHomePage);

  //  SCROLL UPDATE
  useScrollUpdate(isScrollingDown, setIsScrollingDown, setIsScrollBelowThreshold, scrollThreshold, navbarThreshold);

  //  BODY OVERFLOW
  useBodyOverflow(bodyOverflowHidden);

  //  BUTTONS HANDLERS
  const toggleDropdown = useCallback(() => {
    setBodyOverflowHidden(!bodyOverflowHidden);
    setIsDropdownActive(!isDropdownActive);
  }, [isDropdownActive, bodyOverflowHidden]);

  const toggleLogin = useCallback(() => {
    if(user) {
      navigate('/profile');
    }
    else {
      setBodyOverflowHidden(!bodyOverflowHidden);
      setIsLoginActive(!isLoginActive);
    }
  }, [user, navigate, isLoginActive, bodyOverflowHidden]);

  const toggleCart = useCallback(() => {
    setBodyOverflowHidden(!bodyOverflowHidden);
    setIsCartActive(!isCartActive);
  }, [isCartActive, bodyOverflowHidden]);

  const navbarMenu = useMemo(() => (
    {
      title: 'MENU',
      company: 'CULTURE',
      categories: {
        all: 'ALL WATCHES',
        new: 'NEW ARRIVALS',
        brands: 'BRANDS'
      },
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
      },
      footer: {
        contact: 'CONTACT US',
        about: 'ABOUT CULTURE',
        stores: 'OUR STORES',
        faq: 'FAQ'
      }
    }
  ), []);

  return(
    <div id='navbar' className={`navbar ${isScrollingDown && isScrollBelowThreshold ? '' : 'nav-open'}`}>
      <div className={`navbar__wrapper ${isHomePage && !isScrollBelowThreshold ? 'nav-top' : ''}`}>
        {/* MENU DESKTOP */}
        <MenuDesktop isDropdownActive={isDropdownActive} toggleDropdown={toggleDropdown} toggleLogin={toggleLogin} toggleCart={toggleCart} navbarMenu={navbarMenu} />
        {/* MENU MOBILE */}
        <div className={`navbar__modal ${isDropdownActive ? 'active' : ''}`}>
          <div className={`navbar__modal__inner ${isDropdownActive ? 'open' : ''}`}>
            <MenuMobile isDropdownActive={isDropdownActive} toggleDropdown={toggleDropdown} navbarMenu={navbarMenu} />
          </div>
        </div>
        {/* LOGIN MODAL */}
        <div className={`navbar__login ${isLoginActive ? 'active' : ''}`}>
          <div className={`navbar__login__inner ${isLoginActive ? 'open' : ''}`}>
            <LoginModal handleBtn={toggleLogin} />
          </div>
        </div>
        {/* CART MODAL */}
        <div className={`navbar__cart ${isCartActive ? 'active' : ''}`}>
          <div className={`navbar__cart__inner ${isCartActive ? 'open' : ''}`}>
            <CartModal handleBtn={toggleCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
