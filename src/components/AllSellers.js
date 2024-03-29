
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SingleSeller from "./seller/SingleSeller";
function AllSellers() {
    const baseUrl = "http://127.0.0.1:8000/api"
    const [SellerList, setSellerList] = useState([]);
    const [totalResult, setTotalResult] = useState(0);

    useEffect(() => {
        fetchData(baseUrl + `/vendors/`);
    }, []); // Empty dependency array means the effect runs only once on mount

    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setSellerList(data.results);
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
    for (let i = 1; i <= totalResult; i++) {
        links.push(<li class="page-item"><Link onClick={() => changeUrl(baseUrl + `/vendor/?page=${i}`)} to={`/vendor/?page=${i}`} class="page-link" >{i}</Link></li>);
    }
    return (
        <section className="container my-4">
            <h3 className='my-4 '> All Sellers
            </h3>
            <div className='row mb-4'>
                {
                    SellerList.map((seller, index) => {
                        return <SingleSeller key={index} seller={seller} />
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

export default AllSellers;