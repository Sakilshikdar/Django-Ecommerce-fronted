import SellerSidebar from "./SellerSidebar";

function SellerDashboard() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                        <div className="row">
                            <div className="col-md-4 mb-2">
                                <div>
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h4>Total Product</h4>
                                            <h4>
                                                <a href="#">23</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div>
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h4>Total Orders</h4>
                                            <h4>
                                                <a href="#">123</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div>
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h4>Total Customer</h4>
                                            <h4>
                                                <a href="#">123</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default SellerDashboard;