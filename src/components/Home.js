import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import { useState, useEffect } from 'react';

function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products/')
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
                    <div className='col-12 col-md-3 mb-4'>
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                            <div className="card-body shadow">
                                <h4 className="card-title">Category title</h4>
                                <div className="card-footer">
                                    Product Downloads: 23242
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 mb-4'>
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                            <div className="card-body shadow">
                                <h4 className="card-title">Category title</h4>
                                <div className="card-footer">
                                    Product Downloads: 23242
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 mb-4'>
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                            <div className="card-body shadow">
                                <h4 className="card-title">Category title</h4>
                                <div className="card-footer">
                                    Product Downloads: 23242
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 mb-4'>
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                            <div className="card-body shadow">
                                <h4 className="card-title">Category title</h4>
                                <div className="card-footer">
                                    Product Downloads: 23242
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* propular category end */}



                {/* propular products start */}

                <div className='d-flex align-items-center justify-content-between'>
                    <h3 className='mb-4'>Propular Products
                    </h3>
                    <a href='#' className='mb-4  btn  btn-dark'>View All Products <i className="fa-solid fa-arrow-right px-1"></i></a>
                </div>
                <div className='row mb-4'>
                    <div className='col-12 col-md-3 mb-4'>
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                            <div className="card-body shadow">
                                <h4 className="card-title">Product title</h4>
                                <h5 className="card-title text-muted">Price: 200$</h5>
                                <div className="card-footer">
                                    <button title='add to card' className='btn btn-success btn-sm'>
                                        <i className="fa-solid fa-cart-shopping "></i>
                                    </button>
                                    <button title='add to whishlist' className='btn btn-success btn-danger  btn-sm ms-1'>
                                        <i className="fa fa-heart "></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 mb-4'>
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                            <div className="card-body shadow">
                                <h4 className="card-title">Product title</h4>
                                <h5 className="card-title text-muted">Price: 200$</h5>
                                <div className="card-footer">
                                    <button title='add to card' className='btn btn-success btn-sm'>
                                        <i className="fa-solid fa-cart-shopping "></i>
                                    </button>
                                    <button title='add to whishlist' className='btn btn-success btn-danger  btn-sm ms-1'>
                                        <i className="fa fa-heart "></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 mb-4'>
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                            <div className="card-body shadow">
                                <h4 className="card-title">Product title</h4>
                                <h5 className="card-title text-muted">Price: 200$</h5>
                                <div className="card-footer">
                                    <button title='add to card' className='btn btn-success btn-sm'>
                                        <i className="fa-solid fa-cart-shopping "></i>
                                    </button>
                                    <button title='add to whishlist' className='btn btn-success btn-danger  btn-sm ms-1'>
                                        <i className="fa fa-heart "></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 mb-4'>
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                            <div className="card-body shadow">
                                <h4 className="card-title">Product title</h4>
                                <h5 className="card-title text-muted">Price: 200$</h5>
                                <div className="card-footer">
                                    <button title='add to card' className='btn btn-success btn-sm'>
                                        <i className="fa-solid fa-cart-shopping "></i>
                                    </button>
                                    <button title='add to whishlist' className='btn btn-success btn-danger  btn-sm ms-1'>
                                        <i className="fa fa-heart "></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                {/* leatest products end */}



                {/* propular saller start */}
                <div className='d-flex align-items-center justify-content-between'>
                    <h3 className='mb-4'>Propular Sellers
                    </h3>
                    <a href='#' className='mb-4 float-end btn btn-dark'>View All Sellers <i className="fa-solid fa-arrow-right px-1"></i></a>
                </div>
                <div className='row mb-4'>
                    <div className='col-12 col-md-3 mb-4'>
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                            <div className="card-body shadow">
                                <h4 className="card-title">Saller Name: </h4>
                                <div className="card-footer">
                                    Categories: <a href='#'>python</a>, <a href='#'>javascript</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 mb-4'>
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                            <div className="card-body shadow">
                                <h4 className="card-title">Saller Name: </h4>
                                <div className="card-footer">
                                    Categories: <a href='#'>python</a>, <a href='#'>javascript</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 mb-4'>
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                            <div className="card-body shadow">
                                <h4 className="card-title">Saller Name: </h4>
                                <div className="card-footer">
                                    Categories: <a href='#'>python</a>, <a href='#'>javascript</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 mb-4'>
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                            <div className="card-body shadow">
                                <h4 className="card-title">Saller Name: </h4>
                                <div className="card-footer">
                                    Categories: <a href='#'>python</a>, <a href='#'>javascript</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* propular Seller end */}


                {/* ratting and reviews start*/}

                <div id="carouselExampleIndicators" className="carousel slide my-4 p-5 bg-dark text-white">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i> <cite title="customer name">customer name</cite>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="carousel-item">
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i> <cite title="customer name">customer name</cite>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="carousel-item">
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i> <cite title="customer name">customer name</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
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