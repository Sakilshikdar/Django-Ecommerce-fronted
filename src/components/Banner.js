import React from 'react';
import banner from './images/banner.jpg';

function Banner() {
    return (
        <div>
            <div className="rounded-0 h-100 my-5">
                <div className="row g-0 h-100">
                    <div className="col-md-6 col-xl-5 d-flex align-items-center p-2 p-md-3 p-xl-5">
                        <div className="card-body p-1 p-md-3 p-xl-5">
                            <p className="lead">Welcome to the Shop</p>
                            <h2 className="card-title" style={{ color: 'rgb(223, 30, 30)', '--darkreader-inline-color': '#ff4646' }} data-darkreader-inline-color="">Ecommerce Shop</h2>
                            <p className="card-text mt-3">Discover effortless shopping with our eCommerce store! Browse through a vast selection of products from the comfort of your home. Enjoy secure transactions, speedy delivery, and exceptional customer service. Elevate your shopping experience with us today.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-7">
                        <img src={banner} className="card-img d-none d-md-block" loading="lazy" style={{ height: '100%', objectFit: 'cover', position: 'relative', top: '50%', transform: 'translateY(-50%)' }} alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
