function SellerLogout() {
    console.log("Logging out...");
    if (localStorage.getItem('vendor_login')) {
        localStorage.removeItem('vendor_login');
    }
    if (localStorage.getItem('vendor_username')) {
        localStorage.removeItem('vendor_username');
    }
    window.location.href = '/seller/login';
}

export default SellerLogout;