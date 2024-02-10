import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import App from './App.js';
import Home from './components/Pages/Home/Home.jsx';
import Login from './components/Pages/Login/Login.jsx';
import Register from './components/Pages/Register/Register.jsx';
import Profile from './components/Pages/Profile/Profile.jsx';
import Cart from './components/Pages/Cart/Cart.jsx';
import Checkout from './components/Pages/Checkout/Checkout.jsx';
import ProductSingle from './components/Pages/ProductSingle/ProductSingle.jsx';
import ProductAll from './components/Pages/ProductAll/ProductAll.jsx';
import Category from './components/Pages/Category/Category.jsx';
import BrandAll from './components/Pages/BrandAll/BrandAll.jsx';
import BrandSingle from './components/Pages/BrandSingle/BrandSingle.jsx';
import CollectionAll from './components/Pages/CollectionAll/CollectionAll.jsx';
import CollectionSingle from './components/Pages/CollectionSingle/CollectionSingle.jsx';
import E404 from './components/Pages/E404/E404.jsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route exact path='/' element={<App />}>
			<Route index={true} element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/profile' element={<Profile />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/checkout' element={<Checkout />} />
			<Route path='/watches/:id' element={<ProductSingle />} />
			<Route path='/categories/all-watches' element={<ProductAll />} />
			<Route path='/categories/:id' element={<Category />} />
			<Route path='/brands/all-brands' element={<BrandAll />} />
			<Route path='/brands/:id' element={<BrandSingle />} />
			<Route path='/collections/all-collections' element={<CollectionAll />} />
			<Route path='/collections/:id' element={<CollectionSingle />} />
			<Route path='*' element={<E404 />} />
		</Route>,
	),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	//<React.StrictMode>
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>,
	//</React.StrictMode>
);
