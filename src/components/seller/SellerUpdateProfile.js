import SellerSidebar from "./SellerSidebar";
import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";

function SellerUpdateProfile() {
    const [ProfileData, setProfileData] = useState({
        'user_id': '',
        'first_name': '',
        'last_name': '',
        'username': '',
        'email': '',
        'phone': '',
        'p_image': '',
        'address': ''
    });
    var vendor_id = localStorage.getItem('vendor_id');


    const baseUrl = "https://django-ecommerce-backend.onrender.com/api"
    useEffect(() => {
        fetchData(baseUrl + '/vendor/' + vendor_id)
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setProfileData({
                    'user_id': data.user.id,
                    'first_name': data.user.first_name,
                    'last_name': data.user.last_name,
                    'username': data.user.username,
                    'email': data.user.email,
                    'phone': data.phone,
                    'address': data.address,
                    'p_image': data.profile_img,

                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    const inputHandeler = (e) => {
        setProfileData({ ...ProfileData, [e.target.name]: e.target.value });
    }

    const handleFileChange = (e) => {
        setProfileData({ ...ProfileData, [e.target.name]: e.target.files[0] });
    }

    const submitHandler = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Your form submission logic here
        const formData = new FormData();
        formData.append('user', ProfileData.user_id);
        formData.append('phone', ProfileData.phone);
        formData.append('address', ProfileData.address);
        formData.append('profile_img', ProfileData.p_image);
        axios.put(baseUrl + '/vendor/' + vendor_id + '/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                window.location.reload()
            }
            )
            .catch(function (error) {
                console.log(error);
            });

        const formUserData = new FormData();
        formUserData.append('first_name', ProfileData.first_name);
        formUserData.append('last_name', ProfileData.last_name);
        formUserData.append('address', ProfileData.address);
        formUserData.append('email', ProfileData.email);
        formUserData.append('phone', ProfileData.phone);

        axios.put(baseUrl + '/user/' + ProfileData.user_id, formUserData)
            .then(function (response) {
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
                        <SellerSidebar />
                    </div>
                    <div className="col-md-9 mb-2 col-12">
                        <div className="card-header">
                            <h2 className="text-light">Welcome <span className="text-primary ">{ProfileData.username}</span></h2>
                            <h4 className="my-4">
                                Update Profile
                            </h4>
                        </div>
                        <div className="card-body">


                            <form>
                                <div className="form-group">
                                    <label for="firstname">First Name</label>
                                    <input name="first_name" onChange={inputHandeler} value={ProfileData.first_name} type="text" className="form-control" id='firstname' placeholder="Enter first name" />
                                </div>
                                <div className="form-group">
                                    <label for="lastname">Last Name</label>
                                    <input name="last_name" onChange={inputHandeler} value={ProfileData.last_name} type="text" className="form-control" id='lastname' placeholder="Enter last name" />
                                </div>
                                <div className="form-group">
                                    <label for="username">User Name</label>
                                    <input name="username" onChange={inputHandeler} value={ProfileData.username} type="text" className="form-control" id='username' placeholder="Enter user name" />
                                </div>
                                <div className="form-group mb-3">
                                    <label for="email">Email address</label>
                                    <input name="email" onChange={inputHandeler} value={ProfileData.email} type="email" className="form-control" id='email' placeholder="Enter email" />
                                </div>
                                <div className="form-group mb-3">
                                    <label for="phone">Phone</label>
                                    <input name="phone" onChange={inputHandeler} value={ProfileData.phone} type="number" className="form-control" id='phone' placeholder="Enter phone" />
                                </div>
                                <div className="form-group mb-3">
                                    <lebel for="address">Address</lebel>
                                    <textarea name="address" onChange={inputHandeler} value={ProfileData.address} className="form-control" id='address' placeholder="Enter address" ></textarea>
                                </div>
                                <div className="form-group">
                                    <p>
                                        <img src={ProfileData.p_image} alt="profile image" width="150px" className="mt-2 rounded" />
                                    </p>
                                    <label for="pimg">Profile Image:</label>
                                    <input name="p_image" type="file" onChange={handleFileChange} class="form-control-file" id="pimg" />
                                </div>
                                <button type="button" onClick={submitHandler} className="btn btn-primary my-3">Submit</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}
export default SellerUpdateProfile;