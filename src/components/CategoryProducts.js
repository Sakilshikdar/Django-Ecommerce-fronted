import SingleProduct from './SingleProduct';

function CategoryProducts() {
    return (
        <section className="container ">
            <h3 className='my-4 '> <span className="text-success">Python</span> Products
            </h3>
            <div className='row mb-4'>
                <SingleProduct title="Django-Product-1" />
                <SingleProduct title="Django-Product-2" />
                <SingleProduct title="Django-Product-1" />
                <SingleProduct title="Django-Product-1" />
                <SingleProduct title="Django-Product-1" />
                <SingleProduct title="Django-Product-1" />
                <SingleProduct title="Django-Product-1" />

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


        </section>
    );
}

export default CategoryProducts;