import { useCallback, useMemo } from "react";
import Slider from "react-slick";
import PropTypes from 'prop-types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.scss';

const ImageSlider = ({ product }) => {

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
      key: product?._id,
      speed: 800,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            dots: true,
          }
        },
      ],
    }
  ), [product?._id]);

  return(
    <Slider {...settings} className='slider__wrapper'>
      {product?.images.map((image, index) => (
        <div className='product__images' key={index}>
          <img src={process.env.PUBLIC_URL + `/assets/images/watches/${product?.sku}/${image}.webp`} alt='' />
        </div>
      ))}
    </Slider>
  );
};

ImageSlider.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    sku: PropTypes.string,
  }).isRequired,
};

export default ImageSlider;
