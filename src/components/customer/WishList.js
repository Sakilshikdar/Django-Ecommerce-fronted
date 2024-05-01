import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { CurrencyContext } from "../../Context"
import axios from 'axios';




function WishList() {
    const baseurl = 'https://django-ecommerce-backend.onrender.com/api/'
    const customer_id = localStorage.getItem('customer_id');
    const [WishlistItem, setWishlistItem] = useState([]);

    const { CurrencyDate } = useContext(CurrencyContext);

    useEffect(() => {
        fetchData(baseurl + `customer/` + customer_id + `/wishitems/`);
    }, []); // Empty dependency array means the effect runs only once on mount

    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setWishlistItem(data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function removedFromWishlist(wishlist_id) {
        const formData = new FormData();
        formData.append('wishlist_id', wishlist_id);
        axios.post(baseurl + 'remove_from_wishlist/', formData)
            .then(function (response) {
                if (response.data.bool == true) {
                    document.getElementById(`row${wishlist_id}`).remove();
                }
            })
            .catch(function (error) {
                console.log(error);
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
                                        <tr>No</tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        WishlistItem.map((item, index) => {
                                            return (
                                                <tr id={`row${item.id}`} key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <Link to={`/product/${item.product.slug}/${item.product.id}`}>
                                                            <img src={`${baseurl}${item.product.image}`} className="image-thumbnail me-3" width={60} alt="..." />
                                                            {item.product.title}
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        {
                                                            CurrencyDate != 'usd' &&
                                                            <h6> TK. {item.product.price}</h6>
                                                        }
                                                        {
                                                            CurrencyDate == 'usd' &&
                                                            <h6> $. {item.product.usd_price}</h6>
                                                        }
                                                    </td>
                                                    <td><button onClick={() => removedFromWishlist(item.id)} className="btn btn-danger btn-sm">Removed</button></td>
                                                </tr>
                                            )
                                        })
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
export default WishList;