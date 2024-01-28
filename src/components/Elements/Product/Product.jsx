import { memo } from 'react';
import './Product.scss';

const Product = memo(({ product }) => {
  return(
    <div className='product__wrapper'>
      <div className='product__info__container'>
        <div className='product__info'>
          <div className='product__info__header'>
            <h1>{product?.brand.name}</h1>
            <p>{product?.model}</p>
            <p>REF {product?.reference}</p>
            <p>SKU#{product?.sku}</p>
            <p>-{product?.price.discount}%</p>
            <p>{product?.price.currency}{(product?.price.base - (product?.price.base / product?.price.discount)).toFixed(3)}</p>
          </div>
          <div className='product__info__desc'>
            <h2>DESCRIPTION</h2>
            <p>{product?.description}</p>
          </div>
          <div className='product__info__features'>
            <h2>FEATURES</h2>
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
      <div className='product__images__container'>
        {product?.images.map((image, index) => (
          <div className='product__images' key={index}>
            <img src={process.env.PUBLIC_URL + `/assets/images/watches/${product?.sku}/${image}.webp`} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
});

export default Product;
