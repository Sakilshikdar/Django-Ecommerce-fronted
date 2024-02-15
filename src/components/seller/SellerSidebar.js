import { Link } from "react-router-dom";

function SellerSidebar() {
    return (
        <div >
            <ul className="list-group">
                <Link to="/seller/dashboard/" className="list-group-item list-group-item-action active"> Dashboard</Link>
                <Link to="/seller/SellerProducts" className="list-group-item list-group-item-action">Products</Link>
                <Link to="/seller/AddProduct" className="list-group-item list-group-item-action">Add Product</Link>
                <Link to="/seller/VendorOrders" className="list-group-item list-group-item-action">Orders</Link>
                <Link to="/seller/Customer" className="list-group-item list-group-item-action">Customers</Link>
                <Link to="/seller/Reports" className="list-group-item list-group-item-action">Report</Link>
                <Link to="/seller/SellerUpdateProfile" className="list-group-item list-group-item-action">Profile</Link>
                <Link to="/seller/SellerChangePassword" className="list-group-item list-group-item-action">Change Password</Link>
                <Link
                    to="" className="list-group-item list-group-item-action">Logout</Link>
            </ul>
        </div>
    );
}
export default SellerSidebar;