import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrencyContext } from "../Context";

function SingleProduct(props) {

    const { CurrencyDate } = useContext(CurrencyContext);

    return (
        <div className=" col-12 col-md-3 my-4">

            <div className="card">
                <Link to={`/product/${props.product.title}/${props.product.id}`}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="card-img-top" alt="..." />
                </Link>
                <div className="card-body shadow">
                    <h4 className="card-title">
                        <Link to={`/product/${props.product.title}/${props.product.id}`}>
                            {props?.product.title}
                        </Link>
                    </h4>
                    {
                        CurrencyDate != 'usd' &&
                        <h5>Price: TK. {props.product.price}</h5>
                    }
                    {
                        CurrencyDate == 'usd' &&
                        <h5>Price: $. {props.product.usd_price}</h5>
                    }
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