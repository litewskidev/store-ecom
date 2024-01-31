import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import App from './App.js';
import Home from './components/Pages/Home/Home.jsx';
import Login from './components/Pages/Login/Login.jsx';
import Register from './components/Pages/Register/Register.jsx';
import UserProfile from './components/Pages/UserProfile/UserProfile.jsx';
import Cart from './components/Pages/Cart/Cart.jsx';
import Checkout from './components/Pages/Checkout/Checkout.jsx';
import SingleProduct from './components/Pages/SingleProduct/SingleProduct.jsx';
import AllProducts from './components/Pages/AllProducts/AllProducts.jsx';
import SingleCategory from './components/Pages/SingleCategory/SingleCategory.jsx';
import AllBrands from './components/Pages/AllBrands/AllBrands.jsx';
import SingleBrand from './components/Pages/SingleBrand/SingleBrand.jsx';
import AllCollections from './components/Pages/AllCollections/AllCollections.jsx';
import SingleCollection from './components/Pages/SingleCollection/SingleCollection.jsx';
import E404 from './components/Pages/E404/E404.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path='/' element={ <App /> }>
      <Route index={true} element={ <Home /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/register' element={ <Register /> } />
      <Route path='/profile' element={ <UserProfile /> } />
      <Route path='/cart' element={ <Cart /> } />
      <Route path='/checkout' element={ <Checkout /> } />
      <Route path='/watches/:id' element={ <SingleProduct /> } />
      <Route path='/categories/all-watches' element={ <AllProducts /> } />
      <Route path='/categories/:id' element={ <SingleCategory /> } />
      <Route path='/brands/all-brands' element={ <AllBrands /> } />
      <Route path='/brands/:id' element={ <SingleBrand /> } />
      <Route path='/collections/all-collections' element={ <AllCollections /> } />
      <Route path='/collections/:id' element={ <SingleCollection /> } />
      <Route path='*' element={ <E404 /> } />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  //</React.StrictMode>
);
