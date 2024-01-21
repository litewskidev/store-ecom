import { NavLink } from 'react-router-dom';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Footer.scss';

const Footer = () => {
  return(
    <div className='footer__wrapper'>
      <div className='footer__body'>
        <div className='footer__body__item'>
          <div className='footer__body__item__title'>
            <h2>COMPANY</h2>
          </div>
          <div className='footer__body__item__list'>
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
          <div className='footer__body__item__title'>
            <h2>CUSTOMER CARE</h2>
          </div>
          <div className='footer__body__item__list'>
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
          <div className='footer__body__item__title'>
            <h2>OUR STORES</h2>
          </div>
          <div className='footer__body__item__list'>
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
          <div className='footer__body__item__title'>
            <h2>GET IN TOUCH</h2>
          </div>
          <div className='footer__body__item__list'>
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
      </div>
      <div className='footer__bottom'>
        <div className='footer__bottom__socials'>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
