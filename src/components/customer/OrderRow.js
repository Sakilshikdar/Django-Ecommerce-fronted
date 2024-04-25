
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import axios from 'axios';

function OrderRow(props) {
    const { order, index } = props;
    const baseApiurl = 'http://127.0.0.1:8000/api/'
    const baseurl = 'http://127.0.0.1:8000'
    const [TotalDownloads, setTotalDownloads] = useState(order.product.downloads);


    const countdownloads = (product_id) => {
        // Your form submission logic here
        const formData = new FormData();
        formData.append('product_id', product_id);
        axios.post(baseApiurl + 'update_product_download_count/' + product_id + '/')
            .then(function (response) {
                if (response.data.bool == true) {
                    setTotalDownloads(++order.product.downloads);
                    window.open(baseurl + order.product.product_file, '_blank');
                }

            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <Link to={`/product/${order.product.slug}/${order.product.id}`}>
                    <img src={`${baseurl}/${order.product.image}`} className="image-thumbnail me-3" width={60} alt="..." />
                    {order.product.title}
                </Link>
            </td>
            <td>{order.product.price}</td>
            <td>
                <span>
                    {
                        order.order.order_status == true ? <td className="text-success"><i className="fa fa-check-circle"></i>{order.order.order_status}</td> : <td className="text-danger"><i className="fa fa-times-circle"></i>{order.order.order_status}</td>
                    }


                </span>
            </td>
            <td>
                {
                    order.order.order_status == true &&
                    <button onClick={() => countdownloads(order.product.id)} target="_blank" className="btn btn-primary btn-sm me:sm-4 me-2">Download <span className="badge bg-white text-dark">{order.product.downloads}</span></button>
                }
                {
                    order.order.order_status == true &&
                    <Link to={`/customer/add-review/${order.product.id}`} className=" my-2 me-2 btn btn-primary btn-sm">Add Review </Link>
                }
            </td>
        </tr>
    );
}
export default OrderRow;