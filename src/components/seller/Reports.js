import SellerSidebar from "./SellerSidebar";

function Reports() {
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
                                            <h4>Daily</h4>
                                            <h4>
                                                <a className="btn btn-info text-white" href="#">View</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div>
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h4>Monthly</h4>
                                            <h4>
                                                <a className="btn btn-info text-white" href="#">View</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div>
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h4>Yearly</h4>
                                            <h4>
                                                <a className="btn btn-info text-white" href="#">View</a>
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
export default Reports;