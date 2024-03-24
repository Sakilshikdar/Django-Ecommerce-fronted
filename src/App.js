import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { CartContext, CurrencyContext } from './Context';

// asserts
import 'bootstrap/dist/css/bootstrap.css';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProducts';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import ConfirmOrder from './components/ConfirmOrder';
import OrderSuccess from './components/OrderSuccess';
import OrderFaliure from './components/OrderFaliure';
import TagProducts from './components/TagProducts';

// customer components
import Register from './components/customer/Register';
import CustomerLogin from './components/customer/CustomerLogin';
import CLogout from './components/customer/CustomerLogout';
import Dashboard from './components/customer/Dashboard';
import Orders from './components/customer/Orders';
import WishList from './components/customer/WishList';
import UpdateProfile from './components/customer/UpdateProfile';
import ChangePassword from './components/customer/ChangePassword';
import Address from './components/customer/Address';
import AddAddress from './components/customer/AddAddress';

// seller components
import SellerRegister from './components/seller/SellerRegister';
import SellerLogin from './components/seller/SellerLogin';
import SellerDashboard from './components/seller/SellerDashboard';
import SellerProducts from './components/seller/SellerProducts';
import AddProduct from './components/seller/AddProduct';
import VendorOrders from './components/seller/VendorOrders';
import Customer from './components/seller/Customer';
import Reports from './components/seller/Reports';
import SellerUpdateProfile from './components/seller/SellerUpdateProfile';
import SellerChangePassword from './components/seller/SellerChangePassword';
import UpdateAddress from './components/customer/UpdateAddress';
import SellerLogout from './components/seller/SellerLogout';
import UpdateProduct from './components/seller/UpdateProduct';

const currerentCurrency = localStorage.getItem('currency');
const checkCart = localStorage.getItem('cartData');
function App() {
  const [cartData, setCartData] = useState(JSON.parse(checkCart));
  const [CurrencyDate, setCurrencyDate] = useState(currerentCurrency);
  return (
    <CurrencyContext.Provider value={{ CurrencyDate, setCurrencyDate }}>
      <CartContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<AllProducts />} />
          <Route path='/catagories' element={<Categories />} />
          <Route path='/category/:category_slug/:category_id' element={<CategoryProducts />} />
          <Route path='/product/:product_slug/:product_id' element={<ProductDetails />} />
          <Route path='/products/:tag' element={<TagProducts />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/confirm-order' element={<ConfirmOrder />} />
          <Route path='/OrderSuccess' element={<OrderSuccess />} />
          <Route path='/OrderFaliure' element={<OrderFaliure />} />
          {/* customer routes */}
          <Route path='/customer/register' element={<Register />} />
          <Route path='/customer/login' element={<CustomerLogin />} />
          <Route path='/customer/logout' element={<CLogout />} />
          <Route path='/customer/dashboard' element={<Dashboard />} />
          <Route path='/customer/orders' element={<Orders />} />
          <Route path='/customer/WishList' element={<WishList />} />
          <Route path='/customer/UpdateProfile' element={<UpdateProfile />} />
          <Route path='/customer/ChangePassword' element={<ChangePassword />} />
          <Route path='/customer/address' element={<Address />} />
          <Route path='/customer/AddAddress' element={<AddAddress />} />
          <Route path='/customer/update-address/:address_id' element={<UpdateAddress />} />


          {/* seller routes */}

          <Route path='/seller/register' element={<SellerRegister />} />
          <Route path='/seller/login' element={<SellerLogin />} />
          <Route path='/seller/logout' element={<SellerLogout />} />
          <Route path='/seller/dashboard' element={<SellerDashboard />} />
          <Route path='/seller/SellerProducts' element={<SellerProducts />} />
          <Route path='/seller/AddProduct' element={<AddProduct />} />
          <Route path='/seller/update-product/:product_id' element={<UpdateProduct />} />
          <Route path='/seller/VendorOrders' element={<VendorOrders />} />
          <Route path='/seller/Customer' element={<Customer />} />
          <Route path='/seller/Reports' element={<Reports />} />
          <Route path='/seller/SellerUpdateProfile' element={<SellerUpdateProfile />} />
          <Route path='/seller/SellerChangePassword' element={<SellerChangePassword />} />

        </Routes>
        <Footer />
      </CartContext.Provider>
    </CurrencyContext.Provider>




  );
}

export default App;
