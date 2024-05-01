import SellerSidebar from "./SellerSidebar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Customer() {
    const baseurl = 'https://django-ecommerce-backend.onrender.com/api/'
    const [CustomerList, setCustomerList] = useState([]);
    const vendor_id = localStorage.getItem('vendor_id');
    useEffect(() => {
        fetchData(baseurl + 'vendor/' + vendor_id + '/customers/');
    }, []);



    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setCustomerList(data.results);
            })
    }

    const ShowConfirm = (customer_id) => {
        var deleteConfirm = window.confirm("Are you sure you want to delete?");
        if (deleteConfirm) {
            fetch(baseurl + 'delete-customer-order/' + customer_id,
                {
                    method: 'DELETE'
                }
            )
                .then(response => {
                    if (response.bool == true) {
                        fetchData(baseurl + 'seller/customer/' + customer_id + '/orderitmes');
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
                                        <tr>No</tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        CustomerList.map((customer, index) => (
                                            <tr key={customer.order.customer}>
                                                <td>{index + 1}</td>
                                                <td>{customer.user.username}</td>
                                                <td>{customer.user.email}</td>
                                                <td>{customer.customer.phone}</td>
                                                <td>
                                                    <Link to={`/seller/customer/${customer.customer.id}/orderitems/`} className="btn btn-primary btn-sm">Orders ({CustomerList.length})</Link>
                                                    <button onClick={() => ShowConfirm(customer.customer.id)} className="btn btn-danger btn-sm ms-1">removed from list</button>
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
export default Customer;