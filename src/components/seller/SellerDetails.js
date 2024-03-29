import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from '../../Context';
import SingleProduct from "../SingleProduct";


function SellerDetails() {
    const baseUrl = "http://127.0.0.1:8000/api"
    const [ProductList, setProductList] = useState([]);
    const [VendorData, setVendorData] = useState({
        total_products: 0,
        user: {
            username: '',
            first_name: '',
            last_name: '',
        }
    });
    const [cartButtonStatus, setCartButtonStatus] = useState(false);
    const { seller_username, seller_id } = useParams();
    const userContext = useContext(UserContext);


    useEffect(() => {
        fetchProductData(baseUrl + '/vendor-products/' + seller_id)
        fetchVendorData(baseUrl + '/vendor/' + seller_id)
    }, []);




    function fetchProductData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setProductList(data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function fetchVendorData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setVendorData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }





    return (
        <div className="container mt-4">
            <div className=" row mb-3">
                <div className="col-3">
                    <img src={VendorData.profile_img} className="img-thumbnail"
                        alt={VendorData.user.username}
                    />
                </div>
                <div className="col-9">
                    {

                        !VendorData.user.first_name && <h2>{VendorData.user?.username}</h2>
                    }
                    {
                        VendorData.user.first_name && <h2>{VendorData.user?.first_name} {VendorData.user?.last_name}</h2>
                    }
                    <p>Total Products: {VendorData.total_products}</p>
                </div>
            </div>
            <div className="row">
                {
                    ProductList.map((product, index) => {
                        return <SingleProduct key={index} product={product} />
                    })

                }
            </div>
        </div >
    )
}


export default SellerDetails;