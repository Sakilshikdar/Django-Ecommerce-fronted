
import React from 'react';
import banner from './images/banner.jpg';
function Banner() {



    return (
        <div>
            <div class="card rounded-0 h-100 my-5">
                <div class="row g-0 h-100">
                    <div class="col-md-6 col-xl-5 d-flex align-items-center p-2 p-md-3 p-xl-5">
                        <div class="card-body p-1 p-md-3 p-xl-5">
                            <p class="lead">Welcome to the Shop</p>
                            <h2 class="card-title" style={{ color: 'rgb(223, 30, 30)', '--darkreader-inline-color': '#ff4646' }} data-darkreader-inline-color="">Ecommarce Shop</h2>
                            <p class="card-text mt-3">"Discover effortless shopping with our eCommerce store! Browse through a vast selection of products from the comfort of your home. Enjoy secure transactions, speedy delivery, and exceptional customer service. Elevate your shopping experience with us today</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-7">
                        <img src={banner} class="card-img d-none d-md-block" loading="lazy" style={{ height: '100%', objectFit: 'cover' }} alt="..." />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner;