import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function CategoryProducts() {
    const baseUrl = "https://django-ecommerce-backend.onrender.com/api"
    const [products, setProducts] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const { category_id, category_slug } = useParams();
    useEffect(() => {
        fetchData(baseUrl + `/products/?category/=` + category_id);
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
    var limite = 4;
    var totallink = totalResult / limite;
    for (let i = 1; i <= totallink; i++) {
        links.push(<li class="page-item"><Link onClick={() => changeUrl(baseUrl + `/products/?category=${category_id}&page=${i}`)} to={`/category/${category_slug}/${category_id}/?page=${i}`} class="page-link" >{i}</Link></li>);
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

export default CategoryProducts;