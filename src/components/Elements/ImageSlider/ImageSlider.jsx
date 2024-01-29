import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.scss';

const ImageSlider = ({ product }) => {

  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="slick-arrow arrow-prev"
      onClick={onClick}
    >
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div
      className="slick-arrow arrow-next"
      onClick={onClick}
    >
    </div>
  );

  const settings = {
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
  };

  return(
    <Slider {...settings}>
      {product?.images.map((image, index) => (
        <div id={`image_${index}`} className='product__images' key={index}>
          <img src={process.env.PUBLIC_URL + `/assets/images/watches/${product?.sku}/${image}.webp`} alt='' />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
