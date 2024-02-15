import SellerSidebar from "./SellerSidebar";
import { Link } from "react-router-dom";

function Customer() {
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
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Jhon Deo</td>
                                        <td>jhondeo@gmail.com</td>
                                        <td>012234576</td>
                                        <td>

                                            <button className="btn btn-primary btn-sm">Orders</button>
                                            <button className="btn btn-danger btn-sm ms-1">removed from list</button>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>2</td>
                                        <td>Alex Deo</td>
                                        <td>alexdeo@gmail.com</td>
                                        <td>1445294926</td>
                                        <td>
                                            <button className="btn btn-primary btn-sm">Orders</button>
                                            <button className="btn btn-danger btn-sm ms-1">removed from list</button>
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
export default Customer;