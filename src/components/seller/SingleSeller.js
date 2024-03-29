import { Link } from "react-router-dom";
import { useContext } from "react";
function SingleSeller(props) {

    return (
        <div className=" col-12 col-md-3 my-4">

            <div className="card">
                <Link to={`/seller/${props.seller.user.username}/${props.seller.id}`}>
                    <img src={props.seller.profile_img} className="card-img-top" alt={props.seller.user.username} />
                </Link>
                <div className="card-body shadow">
                    <h4 className="card-title">
                        <Link to={`/seller/${props.seller.user.username}/${props.seller.id}`} >
                            {props?.seller.user.username}
                        </Link>
                    </h4>

                </div>
            </div>
        </div>
    )
}

export default SingleSeller;