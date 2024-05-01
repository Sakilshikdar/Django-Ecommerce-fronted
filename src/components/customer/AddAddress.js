import React from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useState } from "react";


function AddAddress() {

    const baseUrl = "https://django-ecommerce-backend.onrender.com/api"
    const customer_id = localStorage.getItem('customer_id');
    console.log(customer_id);
    const [ErrorMsg, setErrorMsg] = useState('');
    const [SuccessMsg, setSuccessMsg] = useState('');
    const [AddressFromData, setAddressFromData] = useState({
        'address': '',
        'customer': customer_id,
    });

    const inputHandler = (e) => {
        setAddressFromData({ ...AddressFromData, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Your form submission logic here
        const formData = new FormData();
        formData.append('address', AddressFromData.address);
        formData.append('customer', AddressFromData.customer);
        axios.post(baseUrl + '/address/', formData,)
            .then(function (response) {
                if (response.status != 201) {
                    setErrorMsg('Failed to update address');
                    setSuccessMsg('');
                } else {
                    setErrorMsg('');
                    setSuccessMsg('Address added successfully');
                }
                console.log(response);
            }
            )
            .catch(function (error) {
                console.log(error);
            });
    }

    const disbleButton = (AddressFromData.address == '')

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
                                Add Address
                            </h3>
                        </div>
                        <div className="card-body">
                            {ErrorMsg && <p className="alert alert-danger">{ErrorMsg}</p>}
                            {SuccessMsg && <p className="alert alert-success">{SuccessMsg}</p>}

                            <form>
                                <div className="form-group">
                                    <label for="address" className="from-label">Add Address</label>
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
export default AddAddress;