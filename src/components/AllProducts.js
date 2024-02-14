import SingleProduct from "./SingleProduct";

function AllProducts() {
    return (
        <div className="container my-4">
            <h3 className='my-4 '> All Products
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
        </div>
    )
}

export default AllProducts;