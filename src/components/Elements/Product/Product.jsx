import { memo, useCallback, useState } from 'react';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ImageSlider from '../ImageSlider/ImageSlider.jsx';
import PropTypes from 'prop-types';
import './Product.scss';

const Product = memo(({ product }) => {

  //  GSAP
  const productInfoRef = useRef(null);
  const productImageRef = useRef(null);
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    const productInfo = productInfoRef.current;
    const productImage = productImageRef.current;
    tl.fromTo(productInfo, {opacity: 0, x: '2%'}, {opacity: 1, x: 0, duration: .5, ease: 'sine.out', force3D: true})
      .fromTo(productImage, {opacity: 0, x: '-2%'}, {opacity: 1, x: 0, duration: .5, ease: 'sine.out', force3D: true}, '<');
  }, []);

  //  STATES
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  //  BUTTONS HANDLERS
  const toggleDescription = useCallback(() => {
    setIsDescriptionOpen(!isDescriptionOpen);
  }, [isDescriptionOpen]);

  const toggleFeatures = useCallback(() => {
    setIsFeaturesOpen(!isFeaturesOpen);
  }, [isFeaturesOpen]);

  return(
    <div className='product__wrapper'>
      <div className='product__images__container' ref={productImageRef}>
        <ImageSlider product={product} />
      </div>
      <div className='product__info__container' ref={productInfoRef}>
        <div className='product__info'>
          <div className='product__info__header'>
            <div className='product__info__header__title'>
              <h1>{product?.brand.name}</h1>
              <p>{product?.model}</p>
            </div>
            <div className='product__info__header__ref'>
              <p>REF {product?.reference}</p>
              <p>SKU#{product?.sku}</p>
            </div>
            <div className='product__info__header__price'>
              {(product?.price.discount !== 0) ? (
                <>
                  <h2>{product?.price.currency}{(product?.price.base - (product?.price.base / product?.price.discount)).toFixed(3)}</h2>
                  <p>-{product?.price.discount}%</p>
                </>
              ) : (
                <h2>{product?.price.currency}{(product?.price.base).toFixed(3)}</h2>
              )}
            </div>
          </div>
          <div className='product__info__actions'>
            <div className='product__info__actions__cart'>
              <button>ADD TO CART</button>
            </div>
            <div className='product__info__actions__wishlist'>
              <img src={process.env.PUBLIC_URL + '/assets/icons/clock.svg'} alt='wishlist button' />
            </div>
          </div>
          <div className={`product__info__desc ${isDescriptionOpen ? 'open' : ''}`}>
            <div className='product__info__desc__button' onClick={toggleDescription}>
              <h2>DESCRIPTION</h2>
              <img className={isDescriptionOpen ? 'rotate' : ''} src={process.env.PUBLIC_URL + '/assets/icons/arrow-down.svg'} alt='down arrow' />
            </div>
            <p>{product?.description}</p>
          </div>
          <div className={`product__info__features ${isFeaturesOpen ? 'open' : ''}`}>
            <div className='product__info__features__button' onClick={toggleFeatures}>
              <h2>FEATURES</h2>
              <img className={isFeaturesOpen ? 'rotate' : ''} src={process.env.PUBLIC_URL + '/assets/icons/arrow-down.svg'} alt='down arrow' />
            </div>
            <div className='product__info__features__info'>
              <div>
                <div className='product__info__features__details'>
                  <h3>WATCH DETAILS</h3>
                  <div className='product__info__features__details__box'>
                    <h4>SKU:</h4>
                    <p>{product?.sku}</p>
                  </div>
                  <div className='product__info__features__details__box'>
                    <h4>Reference Number:</h4>
                    <p>{product?.reference}</p>
                  </div>
                  <div className='product__info__features__details__box'>
                    <h4>Year:</h4>
                    <p>{product?.year}</p>
                  </div>
                  <div className='product__info__features__details__box'>
                    <h4>Origin:</h4>
                    <p>{product?.features.details.origin}</p>
                  </div>
                  <div className='product__info__features__details__box'>
                    <h4>Style:</h4>
                    {product?.features.details.style.map((style, index) => (
                      <p key={index}>{style}</p>
                    ))}
                  </div>
                  <div className='product__info__features__details__box'>
                    <h4>Gender:</h4>
                    <p>{product?.features.details.gender}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='product__info__features__case'>
                  <h3>CASE & DIAL</h3>
                  <div className='product__info__features__case__box'>
                    <h4>Case Size:</h4>
                    <p>{product?.features.case.size}</p>
                  </div>
                  <div className='product__info__features__case__box'>
                    <h4>Case Material:</h4>
                    <p>{product?.features.case.material}</p>
                  </div>
                  <div className='product__info__features__case__box'>
                    <h4>Caseback:</h4>
                    <p>{product?.features.case.back}</p>
                  </div>
                  <div className='product__info__features__case__box'>
                    <h4>Case Shape:</h4>
                    <p>{product?.features.case.shape}</p>
                  </div>
                  <div className='product__info__features__case__box'>
                    <h4>Dial Color:</h4>
                    <p>{product?.features.dial.color}</p>
                  </div>
                  <div className='product__info__features__case__box'>
                    <h4>Hours Markers:</h4>
                    <p>{product?.features.dial.hoursMarkers}</p>
                  </div>
                  <div className='product__info__features__case__box'>
                    <h4>Water Resistance:</h4>
                    <p>{product?.features.case.waterResistance}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='product__info__features__strap'>
                  <h3>STRAP / BRACELET</h3>
                  <div className='product__info__features__strap__box'>
                    <h4>Strap/Bracelet Material:</h4>
                    <p>{product?.features.strapBracelet.material}</p>
                  </div>
                  <div className='product__info__features__strap__box'>
                    <h4>Band Color:</h4>
                    <p>{product?.features.strapBracelet.bandColor}</p>
                  </div>
                  <div className='product__info__features__strap__box'>
                    <h4>Buckle Type:</h4>
                    <p>{product?.features.strapBracelet.buckleType}</p>
                  </div>
                  <div className='product__info__features__strap__box'>
                    <h4>Bracelet Length:</h4>
                    <p>{product?.features.strapBracelet.length}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='product__info__features__function'>
                  <h3>FUNCTION</h3>
                  <div className='product__info__features__function__box'>
                    <h4>Movement:</h4>
                    <p>{product?.features.function.movement}</p>
                  </div>
                  <div className='product__info__features__function__box'>
                    <h4>Complications:</h4>
                    {product?.features.function.complications.map((complication, index) => (
                      <p key={index}>{complication}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Product.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    brand: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    model: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      base: PropTypes.number.isRequired,
      discount: PropTypes.number.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    features: PropTypes.shape({
      details: PropTypes.shape({
        origin: PropTypes.string.isRequired,
        style: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        gender: PropTypes.string.isRequired,
      }).isRequired,
      function: PropTypes.shape({
        movement: PropTypes.string.isRequired,
        complications: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      }).isRequired,
      case: PropTypes.shape({
        size: PropTypes.string.isRequired,
        material: PropTypes.string.isRequired,
        back: PropTypes.string.isRequired,
        shape: PropTypes.string.isRequired,
        waterResistance: PropTypes.string.isRequired,
      }).isRequired,
      dial: PropTypes.shape({
        color: PropTypes.string.isRequired,
        hoursMarkers: PropTypes.string.isRequired,
      }).isRequired,
      strapBracelet: PropTypes.shape({
        material: PropTypes.string.isRequired,
        bandColor: PropTypes.string.isRequired,
        buckleType: PropTypes.string.isRequired,
        length: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default Product;
