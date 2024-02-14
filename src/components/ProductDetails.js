import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";


function ProductDetails() {
    return (
        <div className="container mt-4">

            <div className=" row">
                <div className="col-4">
                    <div id="product_image" className="carousel carousel-dark slide text-white" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#product_image" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#product_image" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#product_image" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row mb-5">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img p-3 bg-light" alt="..." />
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
                            </div>
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
                    <h1>Product Title</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum, mi vel viverra consectetur, orci metus auctor dui, at finibus nisl felis nec enim. Nullam volutpat eleifend ante, sit amet laoreet sem feugiat vel. Proin sed feugiat odio. Ut lobortis odio leo, ac sollicitudin lacus eleifend nec. Etiam eu congue nulla. Nulla luctus libero et dui ornare, eu pellentesque leo hendrerit. Vivamus ac porta mauris, non suscipit lectus. Sed sem sapien, ultricies non aliquam id, cursus id metus. Mauris tempor ultricies consequat. Integer venenatis risus faucibus tellus fringilla, ac lobortis nisi egestas. Morbi ac commodo erat. Sed dictum luctus consequat. Suspendisse bibendum, ex quis ultricies iaculis, massa eros malesuada tortor, vel tincidunt velit arcu id turpis. Vivamus convallis erat et tempor volutpat.</p>
                    <h5>Price: 200$</h5>
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
                                <Link to="#" className="badge bg-secondary text-white me-1">Python</Link>
                                <Link to="#" className="badge bg-secondary text-white me-1">Django</Link>
                                <Link to="#" className="badge bg-secondary text-white me-1">Java</Link>
                                <Link to="#" className="badge bg-secondary text-white me-1">Python</Link>
                                <Link to="#" className="badge bg-secondary text-white me-1">Django</Link>
                                <Link to="#" className="badge bg-secondary text-white me-1">Java</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* related prodcuts start*/}
            <h3 className="mt-5">Related Products</h3>
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
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#related_products" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#related_products" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>

            {/* related prodcuts end */}

        </div>
    )
}

export default ProductDetails;