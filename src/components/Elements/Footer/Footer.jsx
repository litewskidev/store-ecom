import { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Footer.scss';

const Footer = () => {

  const [isCompanyListActive, setIsCompanyListActive] = useState(false);
  const [isCustomerListActive, setIsCustomerListActive] = useState(false);
  const [isStoresListActive, setIsStoresListActive] = useState(false);
  const [isContactListActive, setIsContactListActive] = useState(false);

  const toggleCompanyList = useCallback(() => {
    setIsCompanyListActive(prev => !prev);
  }, []);

  const toggleCustomerList = useCallback(() => {
    setIsCustomerListActive(prev => !prev);
  }, []);

  const toggleStoresList = useCallback(() => {
    setIsStoresListActive(prev => !prev);
  }, []);

  const toggleContactList = useCallback(() => {
    setIsContactListActive(prev => !prev);
  }, []);

  return(
    <div className='footer__wrapper'>
      <nav className='footer__body'>
        <div className='footer__body__item'>
          <div className='footer__body__item__title' onClick={toggleCompanyList}>
            <h2>COMPANY</h2>
            <div className='footer__body__item__title__icon'>
              <img className={isCompanyListActive ? 'rotate' : ''} src={process.env.PUBLIC_URL + '/assets/icons/arrow-down.svg'} alt='' />
            </div>
          </div>
          <div className={isCompanyListActive ? 'footer__body__item__list__one open' : 'footer__body__item__list__one'}>
            <ul className='footer__body__item__list__inner'>
              <li className='footer__body__item__list__inner__link'>
                <NavLink>ABOUT US</NavLink>
              </li>
              <li className='footer__body__item__list__inner__link'>
                <NavLink>RESPONSIBILITY</NavLink>
              </li>
              <li className='footer__body__item__list__inner__link'>
                <NavLink>CAREERS</NavLink>
              </li>
              <li className='footer__body__item__list__inner__link'>
                <NavLink>COOKIE POLICY</NavLink>
              </li>
              <li className='footer__body__item__list__inner__link'>
                <NavLink>PRIVACY POLICY</NavLink>
              </li>
              <li className='footer__body__item__list__inner__link'>
                <NavLink>TERMS & CONDITIONS</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__body__item'>
          <div className='footer__body__item__title' onClick={toggleCustomerList}>
            <h2>CUSTOMER CARE</h2>
            <div className='footer__body__item__title__icon'>
              <img className={isCustomerListActive ? 'rotate' : ''} src={process.env.PUBLIC_URL + '/assets/icons/arrow-down.svg'} alt='' />
            </div>
          </div>
          <div className={isCustomerListActive ? 'footer__body__item__list__two open' : 'footer__body__item__list__two'}>
            <ul className='footer__body__item__list__inner'>
              <li className='footer__body__item__list__inner__link'>
                <NavLink>DELIVERY</NavLink>
              </li>
              <li className='footer__body__item__list__inner__link'>
                <NavLink>RETURNS & REFUNDS</NavLink>
              </li>
              <li className='footer__body__item__list__inner__link'>
                <NavLink>FAQ</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__body__item'>
          <div className='footer__body__item__title' onClick={toggleStoresList}>
            <h2>OUR STORES</h2>
            <div className='footer__body__item__title__icon'>
              <img className={isStoresListActive ? 'rotate' : ''} src={process.env.PUBLIC_URL + '/assets/icons/arrow-down.svg'} alt='' />
            </div>
          </div>
          <div className={isStoresListActive ? 'footer__body__item__list__three open' : 'footer__body__item__list__three'}>
            <ul className='footer__body__item__list__inner'>
              <li className='footer__body__item__list__inner__link'>
                <NavLink>NEW YORK</NavLink>
              </li>
              <li className='footer__body__item__list__inner__link'>
                <NavLink>LONDON</NavLink>
              </li>
              <li className='footer__body__item__list__inner__link'>
                <NavLink>PARIS</NavLink>
              </li>
              <li className='footer__body__item__list__inner__link'>
                <NavLink>ROME</NavLink>
              </li>
              <li className='footer__body__item__list__inner__link'>
                <NavLink>TOKYO</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__body__item'>
          <div className='footer__body__item__title' onClick={toggleContactList}>
            <h2>GET IN TOUCH</h2>
            <div className='footer__body__item__title__icon'>
              <img className={isContactListActive ? 'rotate' : ''} src={process.env.PUBLIC_URL + '/assets/icons/arrow-down.svg'} alt='' />
            </div>
          </div>
          <div className={isContactListActive ? 'footer__body__item__list__four open' : 'footer__body__item__list__four'}>
            <ul className='footer__body__item__list__inner'>
              <li className='footer__body__item__list__inner__link'>
                <NavLink>CONTACT US</NavLink>
              </li>
              <li className='footer__body__item__list__inner__link'>
                <NavLink>LIVE CHAT</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='footer__bottom'>
        <div className='footer__bottom__socials'>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
