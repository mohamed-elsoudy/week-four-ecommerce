import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './App.css'
import App from './App.jsx'
// pages
import HomePage from '../components/HomePage.jsx';
import Login from '../components/Login.jsx';
import Signup from '../components/Signup.jsx';
import Wishlist from '../components/Wishlist.jsx';
import Cart from '../components/Cart.jsx';
import BillingDetails from '../components/BillingDetails.jsx';
import Account from '../components/account.jsx';
import Contact from '../components/Contact.jsx';
import AboutUs from '../components/AboutUs.jsx';
import Notfound from '../components/NotFound.jsx';
import ProductDetails from '../components/ProductDetails.jsx';
import AllProducts from '../components/AllProducts.jsx';

import { Provider } from 'react-redux';
import store from './store/index.js';

const router = createBrowserRouter([{
  path: "/", 
  element: <App />,
  children: [
    {
      index: true,
      element: <HomePage />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'signup',
      element: <Signup />
    },
    {
      path: 'wishlist',
      element: <Wishlist />
    },
    {
      path: 'cart',
      element: <Cart />
    },
    {
      path: 'billingdetails',
      element: <BillingDetails />
    },
    {
      path: 'account',
      element: <Account />
    },
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path: 'aboutus',
      element: <AboutUs />
    },
    {
      path: 'productdetails/:id',
      element: <ProductDetails />
    },
    {
      path: 'allproducts',
      element: <AllProducts />
    },
    {
      path: 'billingdetails',
      element: <BillingDetails />
    },
    {
      path: '*',
      element: <Notfound />
    },
  ]
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
