import { useCallback, useMemo } from "react";
import Slider from "react-slick";
import ProductCard from "../ProductCard/ProductCard.jsx";
import PropTypes from 'prop-types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsSlider = ({ products }) => {

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
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ],
    }
  ), []);

  return(
    <div className='productsSlider_wrapper'>
      <Slider {...settings}>
        {products?.map((product, index) => (
          <ProductCard product={product} key={index}/>
        ))}
      </Slider>
    </div>
  );
};

export default ProductsSlider

ProductsSlider.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};
