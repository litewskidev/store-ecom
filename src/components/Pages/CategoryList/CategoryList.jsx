import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../../redux/slices/productsApiSlice.js';
import Loading from '../../Elements/Loading/Loading.jsx';
import Products from '../../Elements/Products/Products.jsx';
import PropTypes from 'prop-types';
import './CategoryList.scss';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const CategoryList = () => {
  const navigate = useNavigate();
  const params = useParams();
  const categoryListRef = useRef(null);

  useLayoutEffect(() => {
    const categoryList = categoryListRef.current;
    gsap.fromTo(categoryList, {opacity: 0, x: '-2%'}, {opacity: 1, x: 0, duration: .5, ease: 'sine.out'});
  }, []);

  const category = params.id;
  const { data: categoryProducts, isLoading, isError } = useGetProductsByCategoryQuery(category);

  console.log(categoryProducts);

  return(
    <section id='category-list' ref={categoryListRef}>
      <div className='categoryList__wrapper'>
        <h1>{category.replace('-', ' ').toUpperCase()}</h1>
        {isLoading && <Loading />}
        {isError && navigate('*')}
        {!isLoading && !isError && <Products products={categoryProducts} />}
      </div>
    </section>
  );
};

CategoryList.propTypes = {
  categoryProducts: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

export default CategoryList;
