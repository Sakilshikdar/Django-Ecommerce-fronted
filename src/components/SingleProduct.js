import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CurrencyContext } from "../Context";
import axios from "axios";
import { CartContext } from "../Context";
import { UserContext } from "../Context";


function SingleProduct(props) {

    const baseUrl = "http://127.0.0.1:8000/api/"
    const { CurrencyDate } = useContext(CurrencyContext);

    // const [productData, setProductData] = useState([]);
    const [relatedProduct, setRelatedProduct] = useState([]);
    const { cartData, setCartData } = useContext(CartContext);
    const [productImgs, setProductImgs] = useState([]);
    const [productTags, setProductTags] = useState([]);
    const [cartButtonStatus, setCartButtonStatus] = useState(false);

    const userContext = useContext(UserContext);
    const productData = props.product
    // const { product_slug, product_id } = useParams();


    const [ProductInWishlist, setProductInWishlist] = useState(false);
    const product_id = props.product.id



    useEffect(() => {
        checkProductInCart(product_id);
        checkProductInWishlist(baseUrl + 'check_in_wishlist/', product_id);
    }, []);


    function checkProductInCart(product_id) {
        var cartData = localStorage.getItem('cartData');
        var cartJson = JSON.parse(cartData);
        if (cartJson) {
            cartJson.map((cart) => {
                if (cart != null && cart.product.id == product_id) {
                    setCartButtonStatus(true);
                }
            });
        }
    }

    // wishlist check
    function checkProductInWishlist(baseurl, product_id) {
        const customerId = localStorage.getItem('customer_id');
        const formData = new FormData();
        formData.append('customer', customerId);
        formData.append('product', product_id);

        axios.post(baseurl, formData)
            .then(function (response) {
                if (response.data.bool == true) {
                    setProductInWishlist(true);
                }
                else {
                    setProductInWishlist(false);
                }
            })
            .catch(function (error) {
                setProductInWishlist(false);
            });
    }


    const cartAddButtonHandler = () => {
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        var cartData =
        {
            'product': {
                'id': productData.id,
                'title': productData.title,
                'price': productData.price,
                'image': productData.image,
            },
            'user': {
                'id': 1
            }
        }

            ;
        if (cartJson) {
            cartJson.push(cartData);
            var cartString = JSON.stringify(cartJson);
            localStorage.setItem('cartData', cartString);
            setCartData(cartJson);
        }
        else {
            var newCartList = [];
            newCartList.push(cartData);
            var cartString = JSON.stringify(newCartList);
            localStorage.setItem('cartData', cartString);
        }
        setCartButtonStatus(true);
    }

    const cartRemoveButtonHandler = () => {
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        cartJson.map((cart, index) => {
            if (cart != null && cart.product.id == productData.id) {
                cartJson.splice(index, 1);
            }
        });
        var cartString = JSON.stringify(cartJson);
        localStorage.setItem('cartData', cartString);
        setCartButtonStatus(false);
        setCartData(cartJson);
    }

    function saveInWishList() {

        const customerId = localStorage.getItem('customer_id');
        const formData = new FormData();
        formData.append('customer', customerId);

        formData.append('product', productData.id);

        // console.log(formData);
        axios.post(baseUrl + 'wishlist/', formData)
            .then(function (response) {
                if (response.data.id) {
                    setProductInWishlist(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        // setProductInWishlist(true);

    }


    if (!props.product.image) {
        const logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s'
        props.product.image = logo
    }

    const imgStyle = {
        width: '100%',
        height: '20vw',
        objectfit: 'contain',
        padding: '20px',
        background: '#f9f9f9'

    }

    return (
        <div className=" col-12 col-md-3 my-4">

            <div className="card">
                <Link to={`/product/${props.product.title}/${props.product.id}`}>
                    <img style={imgStyle} src={props.product.image} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body shadow">
                    <h4 className="card-title">
                        <Link to={`/product/${props.product.title}/${props.product.id}`}>
                            {props?.product.title}
                        </Link>
                    </h4>
                    {
                        CurrencyDate != 'usd' &&
                        <h5>Price: TK. {props.product.price}</h5>
                    }
                    {
                        CurrencyDate == 'usd' &&
                        <h5>Price: $. {props.product.usd_price}</h5>
                    }
                    <div className="card-footer">
                        {!cartButtonStatus &&
                            <button type="button" onClick={cartAddButtonHandler} title='add to card' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-shopping "></i>

                            </button>
                        }
                        {
                            cartButtonStatus &&
                            <button type="button" onClick={cartRemoveButtonHandler} title='
                            Remove to card' className='btn btn-warning btn-sm'><i className="fa-solid fa-cart-shopping "></i>
                            </button>

                        }

                        {/* wishlist button start */}
                        {
                            (userContext && ProductInWishlist) &&
                            <button title='add to whishlist' className='btn btn-success btn-danger btn-sm ms-2 disabled'>
                                <i className="fa fa-heart "></i> Wishlist
                            </button>
                        }
                        {
                            (userContext && !ProductInWishlist) &&
                            <button onClick={saveInWishList} title='add to whishlist' className='btn btn-success btn-danger  btn-sm ms-2'>
                                <i className="fa fa-heart "></i> Wishlist
                            </button>
                        }
                        {
                            userContext == null &&
                            <button title='add to whishlist' className='btn btn-success btn-danger  btn-sm ms-2 disabled'>
                                <i className="fa fa-heart "></i> Wishlist
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;