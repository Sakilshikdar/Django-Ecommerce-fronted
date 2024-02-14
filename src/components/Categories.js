import { Link } from "react-router-dom";

function Categories() {
    return (
        <section className="container mt-4">
            <h3 className='mb-4'>All Categories
            </h3>

            <div className='row mb-2'>
                <div className='col-12 col-md-3 mb-4'>
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                        <div className="card-body shadow">
                            <h4 className="card-title">
                                <Link to="/category/python/1">
                                    Category title
                                </Link>
                            </h4>
                            <div className="card-footer">
                                Product Downloads: 23242
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-3 mb-4'>
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                        <div className="card-body shadow">
                            <h4 className="card-title"><Link>
                                Category title
                            </Link></h4>
                            <div className="card-footer">
                                Product Downloads: 23242
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-3 mb-4'>
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                        <div className="card-body shadow">
                            <h4 className="card-title"><Link>
                                Category title
                            </Link></h4>
                            <div className="card-footer">
                                Product Downloads: 23242
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-3 mb-4'>
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                        <div className="card-body shadow">
                            <h4 className="card-title"><Link>
                                Category title
                            </Link></h4>
                            <div className="card-footer">
                                Product Downloads: 23242
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='row mb-2'>
                <div className='col-12 col-md-3 mb-4'>
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                        <div className="card-body shadow">
                            <h4 className="card-title">
                                <Link>
                                    Category title
                                </Link>
                            </h4>
                            <div className="card-footer">
                                Product Downloads: 23242
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-3 mb-4'>
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                        <div className="card-body shadow">
                            <h4 className="card-title"><Link>
                                Category title
                            </Link></h4>
                            <div className="card-footer">
                                Product Downloads: 23242
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-3 mb-4'>
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                        <div className="card-body shadow">
                            <h4 className="card-title"><Link>
                                Category title
                            </Link></h4>
                            <div className="card-footer">
                                Product Downloads: 23242
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-3 mb-4'>
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                        <div className="card-body shadow">
                            <h4 className="card-title"><Link>
                                Category title
                            </Link></h4>
                            <div className="card-footer">
                                Product Downloads: 23242
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>


        </section >
    );
}

export default Categories;