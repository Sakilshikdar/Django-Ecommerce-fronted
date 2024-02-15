import SellerSidebar from "./SellerSidebar";
import { Link } from "react-router-dom";

function SellerProducts() {
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
                                        <td colspan="5" align='right'>

                                            <Link className="btn btn-primary mb-2" to="/seller/AddProduct"><i className="fa fa-plus-circle"></i> Add Product</Link>
                                        </td>
                                    </tr>
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
                                        <td>Product Title</td>
                                        <td>500$</td>
                                        <td>Published</td>
                                        <td>
                                            <a href="#" className="btn btn-info btn-sm">View</a>
                                            <a href="#" className="btn btn-primary btn-sm ms-1">Edit</a>
                                            <a href="#" className="btn btn-danger btn-sm ms-1">Delete</a>

                                        </td>
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
export default SellerProducts;