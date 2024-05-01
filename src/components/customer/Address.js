import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Address() {
    const baseUrl = "https://django-ecommerce-backend.onrender.com/api"
    const customer_id = localStorage.getItem('customer_id');
    const [AddressList, setAddressList] = useState([]);

    useEffect(() => {
        fetchData(baseUrl + '/customer/' + customer_id + `/address-list/`);
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setAddressList(data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    const handleDefault = (address_id) => {
        const formData = new FormData();
        formData.append('address_id', address_id);
        axios.post(baseUrl + '/mark-default-address/' + parseInt(address_id) + '/', formData,)
            .then(function (response) {
                if (response.data.bool == true) {
                    window.location.reload();

                }
            }
            )
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">

                        <Link to="/customer/AddAddress" className="btn btn-outline-success mb-4 float-end">  <i className="fa fa-plus-circle"></i> Add Address</Link>
                    </div>
                    <div className="col-md-3 col-12 mb-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 mb-2 col-12">
                        <div className="row">
                            {
                                AddressList.map((address) => (
                                    <div className="col-md-4 col-6 mb-4">
                                        <div className="card">
                                            <div className="card-body text-muted">
                                                <h6>
                                                    {
                                                        address.default_address &&
                                                        <span role="button" >
                                                            <i className="fa fa-check-circle text-success mb-2" aria-hidden="true"></i>
                                                        </span>
                                                    }
                                                    {!address.default_address &&
                                                        <span role="button" onClick={() => handleDefault(address.id)}>
                                                            <i className="far fa-check-circle text-secondary mb-2" aria-hidden="true"></i>

                                                        </span>}
                                                    <br />
                                                    <Link to={`/customer/update-address/${address.id}`}>{address.address}</Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}
export default Address;