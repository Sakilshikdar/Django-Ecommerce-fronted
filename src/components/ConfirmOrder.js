import { UserContext } from '../Context';
import { useContext } from 'react';
import { CartContext } from '../Context';
import { useState } from 'react';


// Third party
import axios from 'axios';
function ConfirmOrder() {
    const baseurl = 'http://127.0.0.1:8000/api/'
    const { cartData, setCartData } = useContext(CartContext);
    const [ConfirmOrder, setConfirmOrder] = useState(false);
    const [OrderStatus, setOrderStatus] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [PayMethod, setPaytMethod] = useState('');
    const userContext = useContext(UserContext);

    if (!userContext) {
        window.location.href = '/customer/login';
    }
    else {
        if (!ConfirmOrder) {

            addOrderInTable();
        }
    }


    function addOrderInTable() {

        const customer_id = localStorage.getItem('customer_id');
        const formData = new FormData();
        formData.append('customer', customer_id);

        // submit data
        axios.post(baseurl + 'orders/', formData)
            .then(function (response) {
                var orderid = response.data.id;
                console.log(response.data, orderId);
                orderitems(orderid);
                setConfirmOrder(true);
                setOrderId(orderid);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function orderitems(orderId) {
        console.log(orderId);
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);

        if (cartJson != null) {
            cartJson.map((cart, index) => {
                const formData = new FormData();
                formData.append('order', orderId);
                formData.append('product', cart.product.id);
                formData.append('qty', 1);
                formData.append('price', cart.product.price);
                axios.post(baseurl + 'orderitems/', formData)
                    .then(function (response) {
                        cartJson.splice(index, 1);
                        localStorage.setItem('cartData', JSON.stringify(cartJson));
                        setCartData(cartJson);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
        }

    }




    function changePymentMethon(paymethod) {

        setPaytMethod(paymethod);
    }

    function payNow() {
        if (PayMethod != '') {
            changePymentMethon(PayMethod);
        }
        // var paymentMethod = localStorage.getItem('paymentMethod');
        // if (paymentMethod == 'paypal') {
        //     window.location.href = '/customer/paypal/' + orderId;
        // }
        // else if (paymentMethod == 'stripe') {
        //     window.location.href = '/customer/stripe/' + orderId;
        // }
        // else if (paymentMethod == 'razorpay') {
        //     window.location.href = '/customer/razorpay/' + orderId;
        // }
        else {
            alert('Please select payment method');
        }
    }

    function updateOrderStatus(OrderStatuss) {
        axios.post(baseurl + 'updateStatus/' + orderId + '/',)
            .then(function (response) {
                window.location.href = '/OrderSuccess';
            })
            .catch(function (error) {
                window.location.href = '/OrderFaliure';
            });
    }


    function setStatusButton() {
        setTimeout(() => {
            updateOrderStatus(true);
        }, 1000);
    }


    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6 offset-3'>

                    <div className='card py-3 text-center' >
                        <h3 ><i className='fa fa-check-circle text-success'></i> Confirm Order</h3>
                        <h5>ORDER ID: {orderId}</h5>
                    </div>


                    <div className='card p-3 mt-4'>
                        <form>
                            <div className='form-group'>
                                <label>
                                    <input type='radio' onChange={() => changePymentMethon('paypal')} name='payMethod' />  Paypal
                                </label>
                            </div>
                            {/* button */}
                            {PayMethod != 'paypal' &&
                                <button type='button' onClick={payNow} className='mt-3 btn btn-success btn-sm w-25 hidden'>Pay Now</button>
                            }
                        </form>
                        {PayMethod == 'paypal' &&
                            <button type='button' onClick={setStatusButton} className='mt-3 btn btn-success btn-sm w-25'>Pay Now</button>

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmOrder