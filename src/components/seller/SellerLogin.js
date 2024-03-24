import React, { useState } from 'react';
import axios from 'axios';
function SellerLogin() {
    const baseurl = 'http://127.0.0.1:8000/api/'
    const [LoginFormData, setLoginFormData] = useState({
        "username": '',
        "password": ''
    });
    const [errorMsg, setErrorMsg] = useState('');


    const inputHandeler = (e) => {
        setLoginFormData({ ...LoginFormData, [e.target.name]: e.target.value });
    }
    // console.log(loginFormData);

    const submitHandler = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Your form submission logic here
        const formData = new FormData();
        formData.append('username', LoginFormData.username);
        formData.append('password', LoginFormData.password);
        axios.post(baseurl + 'vendor/login/', formData)
            .then(function (response) {
                if (response.data.bool == false) {
                    setErrorMsg(response.data.msg);
                }
                else {
                    localStorage.setItem('vendor_login', true);
                    localStorage.setItem('vendor_username', response.data.user);
                    localStorage.setItem('vendor_id', response.data.id);
                    window.location.href = '/seller/dashboard';
                    setErrorMsg('');

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

                    <div className="col-md-8 col-12 offset-2 card">
                        <div className="card-header">

                            <h3 className="mb-4">
                                Login
                            </h3>
                        </div>
                        <div className="card-body">
                            {
                                errorMsg ? <div className="alert alert-danger" role="alert">
                                    {errorMsg}
                                </div> : ''
                            }

                            <form>
                                <div className="form-group">
                                    <label for="username">User Name</label>
                                    <input name='username' value={LoginFormData.username} onChange={inputHandeler} type="text" className="form-control" id='username' placeholder="Enter user name" />
                                </div>
                                <div className="form-group">
                                    <label for="pwd">Password</label>
                                    <input name='password' value={LoginFormData.password} onChange={inputHandeler} type="password" className="form-control" id="pwd" placeholder="Password" />
                                </div>
                                <button onClick={submitHandler} type="submit" className="btn btn-primary my-3">Submit</button>
                            </form>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default SellerLogin;