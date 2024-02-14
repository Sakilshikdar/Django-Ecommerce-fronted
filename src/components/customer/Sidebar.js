import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div >
            <ul className="list-group">
                <Link to="/customer/dashboard/" className="list-group-item list-group-item-action active"> Dashboard</Link>
                <Link to="/customer/orders" className="list-group-item list-group-item-action">Orders</Link>
                <Link to="/customer/WishList" className="list-group-item list-group-item-action">Wishlist</Link>
                <Link to="/customer/UpdateProfile" className="list-group-item list-group-item-action">Profile</Link>
                <Link to="/customer/ChangePassword" className="list-group-item list-group-item-action">Change Password</Link>
                <Link to="/customer/address" className="list-group-item list-group-item-action">Address</Link>
                <Link
                    to="" className="list-group-item list-group-item-action">Logout</Link>
            </ul>
        </div>
    );
}
export default Sidebar;