import { memo, useCallback, useState } from 'react';
import ImageSlider from '../ImageSlider/ImageSlider.jsx';
import './Product.scss';

const Product = memo(({ product }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const toggleDescription = useCallback(() => {
    setIsDescriptionOpen(!isDescriptionOpen);
  }, [isDescriptionOpen]);

  const toggleFeatures = useCallback(() => {
    setIsFeaturesOpen(!isFeaturesOpen);
  }, [isFeaturesOpen]);

  return(
    <div className='product__wrapper'>
      <div className='product__info__container'>
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
              <h2>{product?.price.currency}{(product?.price.base - (product?.price.base / product?.price.discount)).toFixed(3)}</h2>
              <p>-{product?.price.discount}%</p>
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
              <div className='product__info__features__info__left'>
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
              <div className='product__info__features__info__right'>
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
            </div>
          </div>
        </div>
      </div>
      <div className='product__images__container'>
        <ImageSlider product={product} />
      </div>
    </div>
  );
});

export default Product;
