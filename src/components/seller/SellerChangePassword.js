import SellerSidebar from "./SellerSidebar";

function SellerChangePassword() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                    </div>
                    <div className="col-md-9 mb-2 col-12">
                        <div className="card-header">

                            <h3 className="mb-4">
                                Change Password
                            </h3>
                        </div>
                        <div className="card-body">

                            <form>

                                <div className="form-group">
                                    <label for="pwd">Change Password</label>
                                    <input type="password" className="form-control" id="pwd" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label for="cpwd">New Password</label>
                                    <input type="password" className="form-control" id="cpwd" placeholder="Password" />
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
export default SellerChangePassword;