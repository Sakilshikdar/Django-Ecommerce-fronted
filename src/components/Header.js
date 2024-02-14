import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropdownOpen: false
        };
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            isDropdownOpen: !prevState.isDropdownOpen
        }));
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" onClick={this.toggleDropdown}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={"collapse navbar-collapse" + (this.state.isDropdownOpen ? " show" : "")}>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/categories">Categories</Link>
                            </li>

                            <li className="nav-item dropdown" onClick={this.toggleDropdown}>
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded={this.state.isDropdownOpen ? "true" : "false"}>
                                    My Account
                                </a>
                                <div className={"dropdown-menu" + (this.state.isDropdownOpen ? " show" : "")} aria-labelledby="navbarDropdown">
                                    <Link to='/customer/register' className="dropdown-item" >Register</Link>
                                    <Link to='/customer/login' className="dropdown-item" >Login</Link>
                                    <Link to='/customer/dashboard' className="dropdown-item" >Dashboard</Link>

                                    <Link to='/customer/dashboard' className="dropdown-item" >Logout</Link>
                                </div>
                            </li>

                            <li className="nav-item dropdown" onClick={this.toggleDropdown}>
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded={this.state.isDropdownOpen ? "true" : "false"}>
                                    Saller Panel
                                </a>
                                <div className={"dropdown-menu" + (this.state.isDropdownOpen ? " show" : "")} aria-labelledby="navbarDropdown">
                                    <Link to='/seller/register' className="dropdown-item" >Register</Link>
                                    <Link to='/seller/login' className="dropdown-item" >Login</Link>
                                    <Link to='/seller/dashboard' className="dropdown-item" >Dashboard</Link>
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/Checkout">New Orders (4) </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/Checkout">My Cart (4) </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
