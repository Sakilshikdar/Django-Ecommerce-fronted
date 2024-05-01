import { Link } from "react-router-dom";
import SingleRelatedProduct from "./SingleRelatedProduct";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext, CartContext, CurrencyContext } from '../Context';
import axios from "axios";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function ProductDetails() {
    const baseUrl = "https://django-ecommerce-backend.onrender.com/api"
    const [productData, setProductData] = useState([]);
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [productImgs, setProductImgs] = useState([]);
    const [productTags, setProductTags] = useState([]);
    const [cartButtonStatus, setCartButtonStatus] = useState(false);
    const { product_slug, product_id } = useParams();
    const { cartData, setCartData } = useContext(CartContext);

    const [ProductInWishlist, setProductInWishlist] = useState(false);
    const { CurrencyDate } = useContext(CurrencyContext);
    const userContext = useContext(UserContext);

   
       
    


    useEffect(() => {
        fetchData(baseUrl + '/product/' + product_id)
        relatedData(baseUrl + '/related-products/' + product_id)
        checkProductInCart(product_id);
        checkProductInWishlist(baseUrl + '/check_in_wishlist/', product_id);
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




    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setProductData(data);
                setProductImgs(data.product_imgs);
                setProductTags(data.tags_list);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function relatedData(baseurl) {
        fetch(baseurl)

            .then(response => response.json())
            .then(data => {
                setRelatedProduct(data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    const tagsLinks = []
    for (let i = 0; i < productTags.length; i++) {
        let tag = productTags[i].trim();
        tagsLinks.push(<Link to={`/products/${tag}`} className="badge bg-secondary text-white me-1">{tag}</Link>)
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
                'image': productData.product_imgs[0].image,
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


        axios.post(baseUrl + '/wishlist/', formData)
            .then(function (response) {
                if (response.data.id) {
                    setProductInWishlist(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

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


    const imgStyle = {
        width: '100%',
        height: '20vw',
        objectfit: 'contain',
        padding: '20px',
        background: '#f9f9f9'

    }
   
    console.log(productData);

    return (
        <div className="container mt-4">

            <div className=" row">
                <div className="col-md-4 col-12">
                    <div id="product_image" className="carousel carousel-dark slide text-white" data-bs-ride="true">
                        <div
                            className="carousel-indicators">
                            {
                                productImgs.map((img, index) => {
                                    if (index === 0) {
                                        return <button type="button" data-bs-target="#product_image" data-bs-slide-to={index} className="active" aria-current="true" aria-label="Slide 1"></button>
                                    }
                                    else {
                                        return <button type="button" data-bs-target="#product_image" data-bs-slide-to={index} aria-label={`Slide ${index + 1}`}></button>
                                    }
                                })
                            }
                        </div>
                        <div className="carousel-inner">
                            {
                                productImgs.map((img, index) => {
                                    if (index === 0) {
                                        return <div className="carousel-item active">
                                            <div className="row mb-5">
                                                <img style={imgStyle} src={img.image} className="card-img p-3 bg-light" alt="..." />
                                            </div>
                                        </div>
                                    }
                                    else {
                                        return <div className="carousel-item">
                                            <div className="row mb-5">
                                                <img style={imgStyle} src={img.image} className="card-img p-3" alt="..." />
                                            </div>
                                        </div>
                                    }
                                })
                            }
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#product_image" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#product_image" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-8">
                    <h2>{productData.title}</h2>
                    <p>{productData.details}</p>
                    {
                        CurrencyDate != 'usd' &&
                        <h5>Price: TK. {productData.price}</h5>
                    }
                    {
                        CurrencyDate == 'usd' &&
                        <h5>Price: $. {productData.usd_price}</h5>
                    }
                    <div className="card-footer">
                        <a href={productData.demo_url} target="_blank" className='btn btn-dark me-2'> Demo
                        </a>
                        {!cartButtonStatus &&
                            <button type="button" onClick={cartAddButtonHandler} title='add to card' className='btn btn-primary'><i className="fa-solid fa-cart-shopping "></i> Add to cart

                            </button>
                        }
                        {
                            cartButtonStatus &&
                            <button type="button" onClick={cartRemoveButtonHandler} title='add to card' className='btn btn-danger'><i className="fa-solid fa-cart-shopping "></i> Remove to cart
                            </button>

                        }

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
                        <div className="producttags mt-4 mb-2">
                            <h5>Tags</h5>
                            <p className="">
                                {tagsLinks}
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* related prodcuts start*/}
            {
                relatedProduct.length > 0 &&
                <>
                    <h3 className="mt-4 mt-4 text-center">Related Products</h3>
                    <OwlCarousel className='owl-theme' items={5} loop margin={10} >
                        {relatedProduct.map((product, index) => {
                            return <div class='item'>
                                <SingleRelatedProduct key={index} product={product} />
                            </div>
                        }

                        )
                        }
                    </OwlCarousel>
                </>
            }

            {/* related prodcuts end */}

        </div >
    )
}

export default ProductDetails;