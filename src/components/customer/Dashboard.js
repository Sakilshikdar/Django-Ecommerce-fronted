import Sidebar from "./Sidebar";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    const baseUrl = "https://django-ecommerce-backend.onrender.com/api"
    const customer_id = localStorage.getItem('customer_id');
    const [CountList, setCountList] = useState({
        'totalOrders': 0,
        'totalAddress': 0,
        'totalWishList': 0
    });

    useEffect(() => {
        fetchData(baseUrl + '/customer/dashboard/' + customer_id);
    }, []);
    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setCountList({
                    'totalOrders': data.totalOrders,
                    'totalAddress': data.totalAddress,
                    'totalWishList': data.totalWishList
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    console.log(CountList);
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                        <div className="row">
                            <div className="col-md-4 mb-2">
                                <div>
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h4>Total Orders</h4>
                                            <h4>
                                                <Link to="/customer/orders">
                                                    {CountList.totalOrders}</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div>
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h4>Total Wishlist</h4>
                                            <h4>
                                                <Link to="/customer/WishList" >{CountList.totalWishList}</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div>
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h4>Total Address</h4>
                                            <h4>
                                                <Link to="/customer/address">{CountList.totalAddress}</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Dashboard;