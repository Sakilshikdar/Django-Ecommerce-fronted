import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext, CartContext, CurrencyContext } from '../Context';
import { useContext } from 'react';
function Header() {
    const checkVendor = localStorage.getItem('vendor_login');
    const userContext = useContext(UserContext);
    const { cartData, setCartData } = useContext(CartContext);
    // const currentCurrency = localStorage.getItem('currency');

    const { CurrencyDate, setCurrencyDate } = useContext(CurrencyContext);

    const changeCurrency = (e) => {
        var currency = e.target.value;
        console.log(currency);
        localStorage.setItem('currency', currency);
        setCurrencyDate(currency);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container">
                <h1>
                    <Link to={"/"} class="navbar-brand" >Ecommerce Shop</Link>
                </h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/catagories ">Categories</Link>
                        </li>


                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                My Account
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                {!userContext ?
                                    <>
                                        <Link to='/customer/register' className=" dropdown-item" >Register</Link>
                                        <Link to='/customer/login' className="dropdown-item" >Login</Link>
                                    </>
                                    :
                                    <>
                                        <Link to='/customer/dashboard' className="dropdown-item" >Dashboard</Link>
                                        <Link to='/customer/logout ' className="dropdown-item" >Logout</Link>
                                    </>
                                }
                            </div>
                        </li>


                        <li class="nav-item dropdown">
                            <a class="text-white nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Saller Panel
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                {
                                    !checkVendor &&
                                    <>
                                        <Link to='/seller/register' className="dropdown-item" >Register</Link>
                                        <Link to='/seller/login' className="dropdown-item" >Login</Link>
                                    </>
                                }
                                {
                                    checkVendor &&
                                    <>
                                        <Link to='/seller/dashboard' className="dropdown-item" >Dashboard</Link>
                                        <Link to='/seller/logout' className="dropdown-item" >Logout</Link>
                                    </>
                                }
                            </div>
                        </li>



                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/Checkout text-white ">My Cart ({(cartData == null ? 0 : cartData.length)})</Link>
                        </li>

                        <li className='nav-item'>
                            <div className='nav-link'>
                                <select onChange={changeCurrency}>
                                    {
                                        CurrencyDate != 'usd' &&
                                        <>
                                            <option value='ban' selected>BD</option>
                                            <option value='usd'>USD</option>
                                        </>
                                    }
                                    {
                                        CurrencyDate == 'usd' &&
                                        <>
                                            <option value='usd' selected>USD</option>
                                            <option value='ban' >BD</option>
                                        </>
                                    }

                                </select>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;