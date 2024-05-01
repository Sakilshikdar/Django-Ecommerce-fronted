import SellerSidebar from "./SellerSidebar";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function CustomerOrders() {

    const baseurl = 'https://django-ecommerce-backend.onrender.com/api'
    const [OrderItmes, setOrderItems] = useState([]);
    const vendor_id = localStorage.getItem('vendor_id');
    const { customer_id } = useParams()
    useEffect(() => {
        fetchOrderchData(`${baseurl}/vendor/${vendor_id}/customer/${customer_id}/orderitems/`);
    }, []);




    function fetchOrderchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setOrderItems(data.results);
            })
    }

    const changeStatus = (order_id, status) => {
        fetch(baseurl + 'order-modify/' + order_id + '/', {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                order_status: status
            })

        })
            .then(function (response) {
                if (response.status == 200) {
                    fetchOrderchData(`${baseurl}/vendor/${vendor_id}/customer/${customer_id}/orderitems`);
                }
            }
            )

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
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        OrderItmes && OrderItmes.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td> <img src={item.product.product_imgs[0].image} className="image-thumbnail" width={60} alt="..." /> {item.product.title}</td>
                                                    <td>{item.product.price}</td>
                                                    <td>
                                                        {item.order.order_status && <span className="text-success"><i className="fa fa-check-circle"></i> Complete</span>}
                                                        {!item.order.order_status && <span className="text-warning"><i className="fa fa-spinner"></i> Pending</span>}
                                                    </td>
                                                    <td>
                                                        <div className="dropdown">
                                                            <button className="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                Change Status
                                                            </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                {
                                                                    item.order.order_status &&
                                                                    <a className="dropdown-item" href="#" onClick={() => changeStatus(item.order.id, false)}>Pending</a>
                                                                }
                                                                {
                                                                    !item.order.order_status &&
                                                                    <a className="dropdown-item" href="" onClick={() => changeStatus(item.order.id, true)}>Complete</a>
                                                                }
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        )

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
export default CustomerOrders;