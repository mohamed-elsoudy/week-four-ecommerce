import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Overview from "../components/Overview";
import Todays from "../components/Todays";
import Categories from "../components/Categories";
import ThisMonth from "../components/ThisMonth";
import EnhanceMusic from "../components/EnhanceMusic";
import OurProducts from "../components/OurProducts";
import Featured from "../components/Featured";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Wishlist from "../components/Wishlist";
import Cart from "../components/Cart";
import BillingDetails from "../components/BillingDetails";
import Account from "../components/account";
import Contact from "../components/Contact";
import NotFound from "../components/NotFound";
import AboutUs from "../components/AboutUs";
import ProductDetails from "../components/ProductDetails";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import './App.css';
import './login-and-signup.css';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePage />
      <Overview />
      <Todays />
      <Categories />
      <ThisMonth />
      <EnhanceMusic />
      <OurProducts />
      <Featured />
      <Login />
      <Signup />
      <Wishlist />
      <BillingDetails />
      <Cart />
      <Account />
      <Contact />
      <NotFound />
      <AboutUs /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;