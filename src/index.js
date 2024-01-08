import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import App from './App.js';
import Home from './components/Pages/Home/Home.jsx';
import Login from './components/Pages/Login/Login.jsx';
import Register from './components/Pages/Register/Register.jsx';
import ProductsList from './components/Pages/ProductsList/ProductsList.jsx';
import ProductCard from './components/Pages/ProductCard/ProductCard.jsx';
import Cart from './components/Pages/Cart/Cart.jsx';
import Success from './components/Pages/Success/Success.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path='/' element={ <App /> }>
      <Route index={true} element={ <Home /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/register' element={ <Register /> } />
      <Route path='/products/:category' element={ <ProductsList /> } />
      <Route path='/product/:id' element={ <ProductCard /> } />
      <Route path='/cart' element={ <Cart /> } />
      <Route path='/success' element={ <Success /> } />
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
