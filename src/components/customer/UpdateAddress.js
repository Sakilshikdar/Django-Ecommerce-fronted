import React from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function UpdateAddress() {

    const baseUrl = "http://127.0.0.1:8000/api"
    const { address_id } = useParams()
    const customer_id = localStorage.getItem('customer_id');
    const [ErrorMsg, setErrorMsg] = useState('');
    const [SuccessMsg, setSuccessMsg] = useState('');
    const [AddressFromData, setAddressFromData] = useState({
        'address': '',
        'customer': parseInt(customer_id),
    });


    const disbleButton = (AddressFromData.address == '')

    useEffect(() => {
        fetchData(baseUrl + '/address/' + address_id);
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setAddressFromData({ 'address': data.address });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    const inputHandler = (e) => {
        setAddressFromData({ ...AddressFromData, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Your form submission logic here
        const formData = new FormData();
        formData.append('address', AddressFromData.address);
        formData.append('customer', AddressFromData.customer);
        axios.put(baseUrl + '/address/' + parseInt(address_id) + '/', formData,)
            .then(function (response) {
                if (response.status != 200) {
                    setErrorMsg('Failed to add address');
                    setSuccessMsg('');
                } else {
                    setSuccessMsg('Address added successfully');
                    setErrorMsg('');
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
                    <div className="col-md-3 col-12 mb-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 mb-2 col-12">
                        <div className="card-header">

                            <h3 className="mb-4">
                                Update Address
                            </h3>
                        </div>
                        <div className="card-body">
                            {ErrorMsg && <p className="alert alert-danger">{ErrorMsg}</p>}
                            {SuccessMsg && <p className="alert alert-success">{SuccessMsg}</p>}

                            <form>
                                <div className="form-group">
                                    <textarea name="address" value={AddressFromData.address} onChange={inputHandler} className="form-control" id='address' placeholder="Enter your address" />
                                </div>
                                <button onClick={submitHandler} type="submit" className="btn btn-primary my-3" disabled={disbleButton}>Submit</button>
                            </form>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default UpdateAddress;