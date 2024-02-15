import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ProductDetails() {
    const baseUrl = "http://127.0.0.1:8000/api"
    const [productData, setProductData] = useState([]);
    const [productImgs, setProductImgs] = useState([]);
    const [productTags, setProductTags] = useState([]);
    const { product_slug, product_id } = useParams();
    useEffect(() => {
        fetchData(baseUrl + '/product/' + product_id)
    }, []); // Empty dependency array means the effect runs only once on mount

    function fetchData(baseurl) {
        console.log(baseUrl + '/product' + product_id);
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

    const tagsLinks = []
    for (let i = 0; i < productTags.length; i++) {
        let tag = productTags[i].trim();
        tagsLinks.push(<Link to={`/products/${tag}`} className="badge bg-secondary text-white me-1">{tag}</Link>)
    }

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
                                                <img src={img.image} className="card-img p-3 bg-light" alt="..." />
                                            </div>
                                        </div>
                                    }
                                    else {
                                        return <div className="carousel-item">
                                            <div className="row mb-5">
                                                <img src={img.image} className="card-img p-3" alt="..." />
                                            </div>
                                        </div>
                                    }
                                })
                            }
                            {/* <div className="carousel-item active">
                                <div className="row mb-5">
                                    <img src={img.images} className="card-img p-3 bg-light" alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row mb-5">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img p-3" alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row mb-5">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img p-3" alt="..." />
                                </div>
                            </div> */}
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
                    {/* <img src={productImgs[0].image} /> */}
                    <p>{productData.details}</p>
                    <h5>Price: {productData.price}</h5>
                    <div className="card-footer">
                        <Link to="#" target="_blank" className='btn btn-dark me-2'> Demo
                        </Link>
                        <button title='add to card' className='btn btn-primary'><i className="fa-solid fa-cart-shopping "></i> Add to cart

                        </button>
                        <button title='add to card' className='btn btn-success ms-2'><i class="fa-solid fa-bag-shopping me-1"></i>Buy Now

                        </button>
                        <button title='add to whishlist' className='btn btn-success btn-danger  btn-sm ms-2'>
                            <i className="fa fa-heart "></i> Wishlist
                        </button>
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
            {/* <h3 className="mt-5">Related Products</h3>
            <div id="related_products" className="carousel carousel-dark slide  text-white" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#related_products" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#related_products" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#related_products" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row mb-5">
                            <SingleProduct title="Django-Product-1" />
                            <SingleProduct title="Django-Product-1" />
                            <SingleProduct title="Django-Product-1" />
                            <SingleProduct title="Django-Product-1" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row mb-5">
                            <SingleProduct title="Django-Product-1" />
                            <SingleProduct title="Django-Product-1" />
                            <SingleProduct title="Django-Product-1" />
                            <SingleProduct title="Django-Product-1" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row mb-5">
                            <SingleProduct title="Django-Product-1" />
                            <SingleProduct title="Django-Product-1" />
                            <SingleProduct title="Django-Product-1" />
                            <SingleProduct title="Django-Product-1" />
                        </div>
                    </div>
                </div>
            </div> */}

            {/* related prodcuts end */}

        </div >
    )
}

export default ProductDetails;