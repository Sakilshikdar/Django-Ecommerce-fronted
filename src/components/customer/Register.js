function Register() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-md-8 col-12 offset-2 card">
                        <div className="card-header">

                            <h3 className="mb-4">
                                Register
                            </h3>
                        </div>
                        <div className="card-body">


                            <form>
                                <div className="form-group">
                                    <label for="firstname">First Name</label>
                                    <input type="text" className="form-control" id='firstname' placeholder="Enter first name" />
                                </div>
                                <div className="form-group">
                                    <label for="lastname">Last Name</label>
                                    <input type="text" className="form-control" id='lastname' placeholder="Enter last name" />
                                </div>
                                <div className="form-group">
                                    <label for="username">User Name</label>
                                    <input type="text" className="form-control" id='username' placeholder="Enter user name" />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" className="form-control" id='email' placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label for="pwd">Password</label>
                                    <input type="password" className="form-control" id="pwd" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary my-3">Submit</button>
                            </form>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Register;