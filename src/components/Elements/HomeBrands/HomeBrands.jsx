import { useCallback, useMemo } from 'react';
import './HomeBrands.scss';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import ScrollButton from '../ScrollButton/ScrollButton';

const HomeBrands = () => {

  const CustomPrevArrow = useCallback(({ onClick }) => (
    <div
      className="slick-arrow arrow-prev"
      onClick={onClick}
    >
    </div>
  ), []);

  const CustomNextArrow = useCallback(({ onClick }) => (
    <div
      className="slick-arrow arrow-next"
      onClick={onClick}
    >
    </div>
  ), []);

  const settings = useMemo(() => (
    {
      speed: 800,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
      ],
    }
  ), []);

  const homeBrandsMenu = useMemo(() => (
    [
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
        id: 'moser-cie',
        name: 'H. Moser & Cie.'
      },
      {
        id: 'lange-sohne',
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
  ), []);

  return(
    <div className='homeBrands__wrapper'>
      <div className='homeBrands__title'>
        <h1>FEATURED BRANDS</h1>
        <p>&middot;</p>
        <NavLink to='/brands/all-brands'>
          <p>VIEW ALL</p>
        </NavLink>
      </div>
      <Slider {...settings}>
        {homeBrandsMenu.map(brand => (
          <div className='homeBrands__brand'>
            <NavLink to={`/brands/${brand.id}`} key={brand.id}>
              <img src={process.env.PUBLIC_URL + `/assets/icons/brands/${brand.id}.svg`} alt={`${brand.name} logo`} />
            </NavLink>
          </div>
        ))}
      </Slider>
      <ScrollButton />
    </div>
  );
};

export default HomeBrands;
