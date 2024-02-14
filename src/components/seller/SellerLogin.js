function SellerLogin() {
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


                            <form>
                                <div className="form-group">
                                    <label for="username">User Name</label>
                                    <input type="text" className="form-control" id='username' placeholder="Enter user name" />
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
export default SellerLogin;