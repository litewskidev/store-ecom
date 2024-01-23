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
import ProductCard from './components/Pages/ProductCard/ProductCard.jsx';
import AllWatches from './components/Pages/AllWatches/AllWatches.jsx';
import CategoryList from './components/Pages/CategoryList/CategoryList.jsx';
import AllBrands from './components/Pages/AllBrands/AllBrands.jsx';
import BrandList from './components/Pages/BrandList/BrandList.jsx';
import AllCollections from './components/Pages/AllCollections/AllCollections.jsx';
import CollectionList from './components/Pages/CollectionList/CollectionList.jsx';
import Success from './components/Pages/Success/Success.jsx';
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
      <Route path='/watches/:id' element={ <ProductCard /> } />
      <Route path='/categories/all-watches' element={ <AllWatches /> } />
      <Route path='/categories/:id' element={ <CategoryList /> } />
      <Route path='/brands/all-brands' element={ <AllBrands /> } />
      <Route path='/brands/:id' element={ <BrandList /> } />
      <Route path='/collections/all-collections' element={ <AllCollections /> } />
      <Route path='/collections/:id' element={ <CollectionList /> } />
      <Route path='/success' element={ <Success /> } />
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
