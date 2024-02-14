import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Address() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">

                        <Link to="/customer/AddAddress" className="btn btn-outline-success mb-4 float-end">  <i className="fa fa-plus-circle"></i> Add Address</Link>
                    </div>
                    <div className="col-md-3 col-12 mb-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 mb-2 col-12">
                        <div className="row">
                            <div className="col-md-4 col-6 mb-4">
                                <div className="card">
                                    <div className="card-body text-muted">
                                        <h6>
                                            <i className="fa fa-check-circle text-success mb-2" aria-hidden="true"></i> <br />
                                            St-2, Near Kali Mata Mandir, Jhansi, Uttar Pradesh, 284001
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-6 mb-4">
                                <div className="card">
                                    <div className="card-body text-muted">
                                        <h6>
                                            <span className="badge bg-secondary mb-2">Mark Default</span>
                                            <br />
                                            St-2, Near Kali Mata Mandir, Jhansi, Uttar Pradesh, 284001
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-6 mb-4">
                                <div className="card">
                                    <div className="card-body text-muted">
                                        <h6>
                                            <span className="badge bg-secondary mb-2">Mark Default</span>
                                            <br />
                                            St-2, Near Kali Mata Mandir, Jhansi, Uttar Pradesh, 284001
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-6 mb-4">
                                <div className="card">
                                    <div className="card-body text-muted">
                                        <h6>
                                            <span className="badge bg-secondary mb-2">Mark Default</span>
                                            <br />
                                            St-2, Near Kali Mata Mandir, Jhansi, Uttar Pradesh, 284001
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-6 mb-4">
                                <div className="card">
                                    <div className="card-body text-muted">
                                        <h6>
                                            <span className="badge bg-secondary mb-2">Mark Default</span>
                                            <br />
                                            St-2, Near Kali Mata Mandir, Jhansi, Uttar Pradesh, 284001
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-6 mb-4">
                                <div className="card">
                                    <div className="card-body text-muted">
                                        <h6>
                                            <span className="badge bg-secondary mb-2">Mark Default</span>
                                            <br />
                                            St-2, Near Kali Mata Mandir, Jhansi, Uttar Pradesh, 284001
                                        </h6>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}
export default Address;