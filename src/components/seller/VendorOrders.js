import SellerSidebar from "./SellerSidebar";
import { Link } from "react-router-dom";

function VendorOrders() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                    </div>
                    <div className="col-md-9 mb-2 col-12">

                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <tr>#</tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="image-thumbnail" width={60} alt="..." /> Django</td>
                                        <td>500$</td>
                                        <td> <span className="text-success"><i className="fa fa-check-circle"></i>Completed</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Change Status
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">Approve</a>
                                                    <a className="dropdown-item" href="#">Sent </a>
                                                    <a className="dropdown-item" href="#">Complete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="image-thumbnail" width={60} alt="..." /> Django</td>
                                        <td>500$</td>
                                        <td> <span className="text-success"><i className="fa fa-check-circle"></i>Completed</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Change Status
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">Approve</a>
                                                    <a className="dropdown-item" href="#">Sent </a>
                                                    <a className="dropdown-item" href="#">Complete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>


                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="image-thumbnail" width={60} alt="..." /> Python</td>
                                        <td>800$</td>
                                        <td> <span className="text-danger"><i className="fa fa-check-circle"></i>Cancle</span>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
export default VendorOrders;