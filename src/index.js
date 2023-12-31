import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import App from './App.js';
import Home from './components/Pages/Home/Home.jsx';
import Login from './components/Pages/Login/Login.jsx';
import Register from './components/Pages/Register/Register.jsx';
import UserProfile from './components/Pages/UserProfile/UserProfile.jsx';
import AllProducts from './components/Pages/AllProducts/AllProducts.jsx';
import NewArrivals from './components/Pages/NewArrivals/NewArrivals.jsx';
import ProductCard from './components/Pages/ProductCard/ProductCard.jsx';
import AllBrands from './components/Pages/AllBrands/AllBrands.jsx';
import BrandList from './components/Pages/BrandList/BrandList.jsx';
import Cart from './components/Pages/Cart/Cart.jsx';
import Success from './components/Pages/Success/Success.jsx';
import E404 from './components/Pages/E404/E404.jsx';

const user = false;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path='/' element={ <App /> }>
      <Route index={true} element={ <Home /> } />
      <Route path='/login' element={ user ? <Navigate to='/' replace /> : <Login /> } />
      <Route path='/register' element={ user ? <Navigate to='/' replace /> : <Register /> } />
      <Route path='/profile' element={ user ? <UserProfile /> : <Navigate to='/login' replace /> } />
      <Route path='/shop/all-watches' element={ <AllProducts /> } />
      <Route path='/shop/new-arrivals' element={ <NewArrivals /> } />
      <Route path='/shop/:id' element={ <ProductCard /> } />
      <Route path='/watches/all-brands' element={ <AllBrands /> } />
      <Route path='/watches/:brand' element={ <BrandList /> } />
      <Route path='/cart' element={ <Cart /> } />
      <Route path='/success' element={ <Success /> } />
      <Route path='*' element={ <E404 /> } />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
