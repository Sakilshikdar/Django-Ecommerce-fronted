import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function TagProducts() {
    const baseUrl = "http://127.0.0.1:8000/api"
    const [products, setProducts] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const { tag } = useParams();
    useEffect(() => {
        fetchData(baseUrl + `/products/` + tag);
    }, []); // Empty dependency array means the effect runs only once on mount

    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setProducts(data.results);
                setTotalResult(data.count);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function changeUrl(baseurl) {
        fetchData(baseurl);
    }
    var links = [];
    var limite = 1;
    var totallink = totalResult / limite;
    for (let i = 1; i <= totallink; i++) {
        links.push(<li class="page-item"><Link onClick={() => changeUrl(baseUrl + `/products/${tag}&page=${i}`)} to={`/products/${tag}/?page=${i}`} class="page-link" >{i}</Link></li>);
    }
    return (
        <section className="container my-4">
            <h3 className='my-4 '> All Products
            </h3>
            <div className='row mb-4'>
                {
                    products.map((product, index) => {
                        return <SingleProduct key={index} product={product} />
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

export default TagProducts;