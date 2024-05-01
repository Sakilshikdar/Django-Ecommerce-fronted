import SellerSidebar from "./SellerSidebar";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function SellerDashboard() {
    const [VendorData, setVendorData] = useState({
        'totalProducts': '',
        'totalOrders': '',
        'totalCustomers': ''
    });
    
    const baseurl = 'https://django-ecommerce-backend.onrender.com/api/'
    const vendor_id = localStorage.getItem('vendor_id');
    useEffect(() => {
        fetchData(baseurl + 'vendor/' + vendor_id + '/dashboard/');
    }, []);
    
    
    
    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setVendorData(data);
            })
    }
    if (VendorData.totalProducts === '') {
        return (
            <div>
                <h1 className="text-center my-5">Loading...</h1>
            </div>
        )
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                        <div className="row">
                            <div className="col-md-4 mb-2">
                                <div>
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h4>Total Product</h4>
                                            <h4>
                                                <Link to={'/seller/sellerProducts'}>{VendorData.totalProducts}</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div>
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h4>Total Orders</h4>
                                            <h4>
                                                <Link to={'/seller/VendorOrders'}>{VendorData.totalOrders}</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div>
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h4>Total Customer</h4>
                                            <h4>
                                                <Link to={'/seller/Customer'}>{VendorData.totalCustomers}</Link>
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
export default SellerDashboard;