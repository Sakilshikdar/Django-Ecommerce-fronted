import { Link } from "react-router-dom";

import { CartContext } from '../Context';
import { useContext } from 'react';
import { useState } from 'react';


function Checkout() {
    const { cartData, setCartData } = useContext(CartContext);
    const [cartButtonStatus, setCartButtonStatus] = useState(false);
    const [productData, setProductData] = useState({});

    var sum = 0;
    if (cartData == null) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger">
                    <h3>Cart is Empty</h3>
                    <Link to="/products" className="btn btn-success">All Product</Link>
                </div>
            </div>
        )
    }
    cartData.map((item, index) => {
        const p = parseInt(item.product.price);
        sum += p;
    });


    const cartRemoveButtonHandler = (product_id) => {
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        cartJson.map((cart, index) => {
            if (cart != null && cart.product.id == product_id) {
                cartJson.splice(index, 1);
            }
        });
        var cartString = JSON.stringify(cartJson);
        localStorage.setItem('cartData', cartString);
        setCartButtonStatus(false);
        setCartData(cartJson);
    }
    if (cartData == null || cartData.length == 0) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger">
                    <h3>Cart is Empty</h3>
                    <Link to="/products" className="btn btn-success">All Product</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="container mt-5">

            <h3 className="mb-4">
                All Items ({(cartData == null ? 0 : cartData.length)})
            </h3>
            <div className="row">

                <div className="col-md-8 col-12">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <tr>No</tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartData.length > 0 && cartData.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td> <img src={item.product.image} className="image-thumbnail" width={60} alt="no fount" /> {item.product.title}</td>
                                                <td>{item.product.price}$</td>
                                                <td><button type="button" onClick={() => cartRemoveButtonHandler(item.product.id)} title='add to card' className='btn btn-danger'><i className="fa-solid fa-cart-shopping "></i> Remove to cart
                                                </button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td className="font-bold">Total</td>
                                    <td>{sum}$</td>
                                </tr>
                                <tr>
                                    <td colSpan={3} align="center">
                                        <Link to="/catagories" className="btn btn-secondary"> Continue Shopping </Link>
                                        <Link to='/confirm-order' className="btn btn-success ms-2"> Process to Pyment</Link>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default Checkout;