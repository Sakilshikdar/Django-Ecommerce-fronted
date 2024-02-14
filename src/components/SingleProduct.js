import { Link } from "react-router-dom";

function SingleProduct(props) {
    return (
        <div className="container col-12 col-md-3 my-4">

            <div className="card">
                <Link to='/product/python-timer/123'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                </Link>
                <div className="card-body shadow">
                    <h4 className="card-title">
                        <Link to="/product/python-timer/123">
                            {props.title}
                        </Link>
                    </h4>
                    <h5 className="card-title text-muted">Price: 200$</h5>
                    <div className="card-footer">
                        <button title='add to card' className='btn btn-success btn-sm'>
                            <i className="fa-solid fa-cart-shopping "></i>
                        </button>
                        <button title='add to whishlist' className='btn btn-success btn-danger  btn-sm ms-1'>
                            <i className="fa fa-heart "></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;