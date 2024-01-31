import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import './Loader.scss';

const Loader = ({ loading }) => {

  //  GSAP
  useLayoutEffect(() => {
    gsap.fromTo(".loader__title__letter", { opacity: 0, y: '15%'}, { opacity: 1, y: 0, stagger: {each: .1, ease: 'none'}, force3D: true });
  }, []);

  return(
    <div className={`loader__wrapper ${loading ? 'loading' : ''}`}>
      <div className='loader__title'>
        <p className='loader__title__letter'>C</p>
        <p className='loader__title__letter'>U</p>
        <p className='loader__title__letter'>L</p>
        <p className='loader__title__letter'>T</p>
        <p className='loader__title__letter'>U</p>
        <p className='loader__title__letter'>R</p>
        <p className='loader__title__letter'>E</p>
      </div>
    </div>
  );
};

export default Loader;
