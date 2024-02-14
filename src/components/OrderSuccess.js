import { Link } from "react-router-dom";

function OrderSuccess() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8 offset-2">
                    <div className="card">
                        <div className="card-body text-center">
                            <p>
                                <i className="fa fa-check-circle fa-3x text-success"></i>
                            </p>
                            <h4 className="text-success">Thanks for the Orders</h4>
                            <p className="mt-4">
                                <Link to="/" className="btn btn-primary">Home</Link>
                                <Link to="/customer/orders" className="btn btn-secondary ms-3">View Orders</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OrderSuccess;    