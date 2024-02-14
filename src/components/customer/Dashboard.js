import Sidebar from "./Sidebar";

function Dashboard() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                        <div className="row">
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
                                            <h4>Total Wishlist</h4>
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
                                            <h4>Total Address</h4>
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
export default Dashboard;