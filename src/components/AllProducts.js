import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function AllProducts() {
    const baseUrl = "https://django-ecommerce-backend.onrender.com/api"
    const [products, setProducts] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const [loading,setLoading ]= useState(true)

    useEffect(() => {
        fetchData(baseUrl + `/products/`);
    }, []); // Empty dependency array means the effect runs only once on mount

    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setProducts(data.results);
                setTotalResult(data.count);
                setLoading(false)
            })
            .catch(error => {
                setLoading(true)
                console.error('Error fetching data:', error);
            });
    }

    function changeUrl(baseurl) {

        fetchData(baseurl);
    }
    var links = [];
    var limite = 2;
    var totallink = totalResult / limite;
    for (let i = 1; i <= totallink; i++) {
        links.push(<li class="page-item"><Link onClick={() => changeUrl(baseUrl + `/products/?page=${i}`)} to={`/products/?page=${i}`} class="page-link" >{i}</Link></li>);
    }
    return (
        <section className="container my-4">
            <h3 className='my-4 '> All Products
            </h3>
            <div className='row mb-4'>
                {
                    loading&& <>
                   <div class="text-center my-5">
                <div class="spinner-border text-primary" role="status">
                    <span class="">wait</span>
                </div>
            </div>
                    </>
                }
                {
                    products.map((product, index) => {
                        return <SingleProduct key={index}  product={product} />
                    })

                }
            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    {links}
                </ul>
            </nav>
        </section>
    )
}

export default AllProducts;