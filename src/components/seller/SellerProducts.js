import SellerSidebar from "./SellerSidebar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function SellerProducts() {

    const baseUrl = "https://django-ecommerce-backend.onrender.com/api"
    // const customer_id = localStorage.getItem('vendor_id');
    const [ProductsList, setProductsList] = useState([]);

    useEffect(() => {
        fetchData(baseUrl + '/products/');
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setProductsList(data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    const ShowDelete = (product_id) => {
        var deleteConfirm = window.confirm("Are you sure you want to delete?");
        if (deleteConfirm) {
            fetch(baseUrl + '/product/' + product_id,
                {
                    method: 'DELETE'
                }
            )
                .then(response => {
                    if (response.status == 204) {
                        fetchData(baseUrl + '/products/');
                    }
                })
        }
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                    </div>
                    <div className="col-md-9 mb-2 col-12">

                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <td colspan="5" align='right'>

                                            <Link className="btn btn-primary mb-2" to="/seller/AddProduct"><i className="fa fa-plus-circle"></i> Add Product</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <tr>No</tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        ProductsList.map((product, index) => (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td><Link to={`/seller/update-product/${product.id}`}> {product.title}</Link></td>
                                                <td>&#2547; {product.price}$</td>
                                                <td>$ {product.usd_price}$</td>
                                                <td>{
                                                    product.publish_status == 1 ? <span className="badge bg-success">Published</span> : <span className="badge bg-danger">Pending</span>
                                                }</td>
                                                <td>
                                                    <Link to={`/seller/update-product/${product.id}`} className="btn btn-primary btn-sm ms-1">Edit</Link>
                                                    <Link onClick={() => ShowDelete(product.id)} className="btn btn-danger btn-sm ms-1">Delete</Link>

                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
export default SellerProducts;