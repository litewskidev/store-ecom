import { useLayoutEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../../redux/slices/productsApiSlice.js';
import gsap from 'gsap';
import Loading from '../../Elements/Loading/Loading.jsx';
import Products from '../../Elements/Products/Products.jsx';
import './CategoryList.scss';

const CategoryList = () => {
  const categoryListRef = useRef(null);
  const params = useParams();
  const navigate = useNavigate();

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

export default CategoryList;
