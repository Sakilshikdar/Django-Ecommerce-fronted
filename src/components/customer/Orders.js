import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { useState } from "react";
import OrderRow from "./OrderRow";



function Orders() {
    const baseurl = 'http://127.0.0.1:8000/api/'
    const customer_id = localStorage.getItem('customer_id');
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetchData(baseurl + `customer/` + customer_id + `/orderitems/`);
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setOrders(data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 mb-2 col-12">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <tr>#</tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {orders.map((order, index) => {
                                        return <OrderRow key={index} order={order} index={index} />
                                    })}
                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    );
}
export default Orders;