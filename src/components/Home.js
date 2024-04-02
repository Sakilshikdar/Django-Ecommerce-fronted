import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import { useState, useEffect } from 'react';
import Testimonial from './Testimonial';
import axios from 'axios';
import SingleSeller from './seller/SingleSeller';

function Home() {

    const imgStyle = {
        width: '100%',
        height: '20vw',
        objectfit: 'contain',
        padding: '20px',
        background: '#f9f9f9'

    }
    const [products, setProducts] = useState([]);
    const baseUrl = "http://127.0.0.1:8000/api/"
    const [ReviewData, setReviewData] = useState([]);
    const [VendorList, setVendorList] = useState([]);
    const [PropularProduct, setPropularProduct] = useState([]);
    const [PropularCategoryProduct, setPropularCategoryProduct] = useState([]);

    useEffect(() => {
        fetchData(baseUrl + 'productrating/')
        fetchPropularVendors(baseUrl + 'vendors/?fetch_limit=4');
        fetchPropularProduct(baseUrl + 'products/?propular=4');
        fetchPropularCategoryProduct(baseUrl + 'catagories/?propular=4');
    }, [])

    const fetchPropularVendors = (url) => {
        axios.get(url)
            .then(function (response) {
                setVendorList(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const fetchPropularCategoryProduct = (url) => {
        axios.get(url)
            .then(function (response) {
                setPropularCategoryProduct(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const fetchPropularProduct = (url) => {
        axios.get(url)
            .then(function (response) {
                setPropularProduct(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const fetchData = (url) => {
        axios.get(url)
            .then(function (response) {
                setReviewData(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products/?fetch_limit=4')
            .then(response => response.json())
            .then(data => {
                setProducts(data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            })
    }, []); // Empty dependency array means the effect runs only once on mount



    return (
        <main className=' mt-4'>
            <div className='container'>
                {/* leatest products start */}
                <div className='d-flex align-items-center justify-content-between'>
                    <h3 className='mb-4 '>Latest Products
                    </h3>
                    <Link to="/products" className='mb-4  btn  btn-dark text-md-end'>View All Products <i className="fa-solid fa-arrow-right px-1"></i></Link>
                </div>
                <div className='row mb-4'>

                    {
                        products.map((product, index) => {
                            return <SingleProduct key={index} product={product} />
                        })

                    }
                </div>
                {/* leatest products end */}


                {/* propular products start */}
                <div className='d-flex align-items-center justify-content-between'>
                    <h3 className='mb-4'>Propular Categories
                    </h3>
                    <Link to='/catagories' className='mb-4  btn  btn-dark'>View All Categories <i className="fa-solid fa-arrow-right px-1"></i></Link>
                </div>
                <div className='row mb-4'>
                    {
                        PropularCategoryProduct.map((category, index) => {
                            return <div className='col-12 col-md-3 mb-4'>
                                <div className="card">
                                    <img style={imgStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                                    <div className="card-body shadow">
                                        <h4 className="card-title">Title: {category.title}</h4>
                                        <div className="card-footer">Total Download:
                                            {category.total_downloads}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })

                    }
                </div>
                {/* propular category end */}



                {/* propular products start */}

                <div className='d-flex align-items-center justify-content-between'>
                    <h3 className='mb-4'>Propular Products
                    </h3>
                    <Link to="/products" className='mb-4  btn  btn-dark text-md-end'>View All Products <i className="fa-solid fa-arrow-right px-1"></i></Link>
                </div>
                <div className='row mb-4'>
                    {
                        PropularProduct.map((product, index) => {
                            return <SingleProduct key={index} product={product} />
                        })

                    }



                </div>
                {/* leatest products end */}



                {/* propular saller start */}
                <div className='d-flex align-items-center justify-content-between'>
                    <h3 className='mb-4'>Propular Sellers
                    </h3>
                    <Link to="/sellers" className='mb-4  btn  btn-dark text-md-end'>View All Sellers <i className="fa-solid fa-arrow-right px-1"></i></Link>
                </div>
                <div className='row mb-4'>
                    {
                        VendorList.map((seller, index) => {
                            return <SingleSeller key={index} seller={seller} />
                        })

                    }

                </div>
                {/* propular Seller end */}


                {/* ratting and reviews start*/}

                <div id="Review_carousel" className="carousel slide my-4 p-5 border bg-dark text-white" data-bs-ride='true'>
                    <div className="carousel-indicators">
                        {
                            ReviewData && ReviewData.map((review, index) => <button type="button" data-bs-target="#Review_carousel" data-bs-slide-to={index} className="active" aria-current="true" aria-label={index}></button>)
                        }
                    </div>
                    <div className="carousel-inner">
                        {
                            ReviewData && ReviewData.map((review, index) => <Testimonial index={index} item={review} />)
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#Review_carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#Review_carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* ratting and reviews  end*/}

            </div>
        </main>
    );
}

export default Home;