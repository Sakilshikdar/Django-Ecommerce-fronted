import { Link } from "react-router-dom";

function SellerSidebar() {
    return (
        <div >
            <ul className="list-group">
                <Link to="/seller/dashboard/" className="list-group-item list-group-item-action active"> Dashboard</Link>
                <Link to="/seller/WishList" className="list-group-item list-group-item-action">Products</Link>
                <Link to="/seller/orders" className="list-group-item list-group-item-action">Orders</Link>
                <Link to="/seller/UpdateProfile" className="list-group-item list-group-item-action">Customers</Link>
                <Link to="/seller/ChangePassword" className="list-group-item list-group-item-action">Report</Link>
                <Link
                    to="" className="list-group-item list-group-item-action">Logout</Link>
            </ul>
        </div>
    );
}
export default SellerSidebar;