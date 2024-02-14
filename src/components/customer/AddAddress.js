import Sidebar from "./Sidebar";

function AddAddress() {
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


                            <form>
                                <div className="form-group">
                                    <label for="address" className="from-label">Add Address</label>
                                    <textarea className="form-control" id='address' placeholder="Enter your address" />
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
export default AddAddress;