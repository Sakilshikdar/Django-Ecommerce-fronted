import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Categories() {

    const baseUrl = "https://django-ecommerce-backend.onrender.com/api"
    const [categories, setCategories] = useState([]);
    const [totalResult, setTotalResult] = useState(0);

    useEffect(() => {
        fetchData(baseUrl + `/catagories/`);
    }, []); // Empty dependency array means the effect runs only once on mount

    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setCategories(data.results);
                setTotalResult(data.count);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function changeUrl(baseurl) {
        console.log(baseurl);
        fetchData(baseurl);
    }
    var links = [];
    for (let i = 1; i <= totalResult; i++) {
        links.push(<li class="page-item"><Link onClick={() => changeUrl(baseUrl + `/catagories/?page=${i}`)} to={`/catagories/?page=${i}`} class="page-link" >{i}</Link></li>);
    }

    return (
        <section className="container mt-4">
            <h3 className='mb-4'>All Categories
            </h3>


            <div className='row mb-2'>
                {categories.map((category) => (
                    <div key={category.id} className='col-12 col-md-3 mb-4'>
                        <div className="card">
                            <img src={category.cat_img} className="card-img-top" alt={category.title} />
                            <div className="card-body shadow">
                                <h4 className="card-title">
                                    <Link to={`/category/${category.title}/${category.id}`}>Title: {category.title}</Link>
                                </h4>
                                <div className="card-footer">
                                    Total Download: {category.total_downloads}
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    {/* {links} */}
                </ul>
            </nav>


        </section >
    );
}

export default Categories;