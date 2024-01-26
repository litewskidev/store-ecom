import { memo, useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SocialLinks from '../SocialLinks/SocialLinks.jsx';
import './MenuMobile.scss';

const MenuMobile = memo(({ isDropdownActive, toggleDropdown, navbarMenu }) => {

  const [isWatchesListActive, setIsWatchesListActive] = useState(false);
  const [isBrandsListActive, setIsBrandsListActive] = useState(false);

  const toggleWatchesList = useCallback(() => {
    setIsWatchesListActive(!isWatchesListActive);
  }, [isWatchesListActive]);

  const toggleBrandsList = useCallback(() => {
    setIsBrandsListActive(!isBrandsListActive);
  }, [isBrandsListActive]);

  return(
    <>
      <div className='navbar__modal__inner__header'>
        <h2>MENU</h2>
        <button className={`navbar__item__menu__button ${isDropdownActive ? 'active' : ''}`} onClick={toggleDropdown}>
          <div className='navbar__item__menu__button__up__modal__btn'></div>
          <div className='navbar__item__menu__button__down__modal__btn'></div>
        </button>
      </div>
      <nav className='navbar__modal__inner__scroll'>
        <ul className='navbar__modal__inner__links'>
          <li className='navbar__modal__inner__links__item'>
            <div className='navbar__modal__inner__links__item__link'>
              <NavLink to='/categories/new-arrivals' className='navbar__modal__inner__links__item__link__button' onClick={toggleDropdown}>
                <p>NEW ARRIVALS</p>
                <img src={process.env.PUBLIC_URL + '/assets/icons/arrow-right.svg'} alt='right arrow' />
              </NavLink>
            </div>
          </li>
          <li className='navbar__modal__inner__links__item'>
            <div className='navbar__modal__inner__links__item__link'>
              <div className='navbar__modal__inner__links__item__link__button' onClick={toggleWatchesList}>
                <p>ALL WATCHES</p>
                <img className={isWatchesListActive ? 'rotate' : ''} src={process.env.PUBLIC_URL + '/assets/icons/arrow-down.svg'} alt='down arrow' />
              </div>
              <div className={`navbar__item__link__dropdown__list__items__inner ${isWatchesListActive ? 'list-open' : ''}`}>
                <ul>
                  <h4>{navbarMenu.shopByCategory.title}</h4>
                    {navbarMenu.shopByCategory.links.map((item, index) => (
                      <li key={index}>
                        <NavLink to={`/categories/${item.id}`} onClick={toggleDropdown}>{item.name}</NavLink>
                      </li>
                    ))}
                  <h4>{navbarMenu.featuredCollections.title}</h4>
                    {navbarMenu.featuredCollections.links.map((item, index) => (
                      <li key={index}>
                        <NavLink to={`/collections/${item.id}`} onClick={toggleDropdown}>{item.name}</NavLink>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </li>
          <li className='navbar__modal__inner__links__item'>
            <div className='navbar__modal__inner__links__item__link'>
              <div className='navbar__modal__inner__links__item__link__button' onClick={toggleBrandsList}>
                <p>BRANDS</p>
                <img className={isBrandsListActive ? 'rotate' : ''} src={process.env.PUBLIC_URL + '/assets/icons/arrow-down.svg'} alt='down arrow' />
              </div>
              <div className={`navbar__item__link__dropdown__list__items__inner ${isBrandsListActive ? 'list-open' : ''}`}>
                <ul>
                  <h4>{navbarMenu.featuredBrands.title}</h4>
                    {navbarMenu.featuredBrands.links.map((item, index) => (
                      <li key={index}>
                        <NavLink to={`/brands/${item.id}`} onClick={toggleDropdown}>{item.name}</NavLink>
                      </li>
                    ))}
                  <h4>{navbarMenu.allBrands.title}</h4>
                    {navbarMenu.allBrands.links.map((item, index) => (
                      <li key={index}>
                        <NavLink to={`/brands/${item.id}`} onClick={toggleDropdown}>{item.name}</NavLink>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <div className='navbar__modal__inner__image'>
          <img src={process.env.PUBLIC_URL + '/assets/images/img_2.webp'} alt='watch' />
        </div>
        <div className='navbar__modal__inner__footer'>
          <NavLink to='/contact' onClick={toggleDropdown}>CONTACT US</NavLink>
          <NavLink to='/about' onClick={toggleDropdown}>ABOUT CULTURE</NavLink>
          <NavLink to='/stores' onClick={toggleDropdown}>OUR STORES</NavLink>
          <NavLink to='/faq' onClick={toggleDropdown}>FAQ</NavLink>
        </div>
        <SocialLinks />
      </nav>
    </>
  );
});

export default MenuMobile;
