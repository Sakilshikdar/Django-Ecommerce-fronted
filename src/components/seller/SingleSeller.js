import { Link } from "react-router-dom";
function SingleSeller(props) {
    console.log(props.product);
    if (!props.seller.profile_img) {
        const logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s'
        props.seller.profile_img = logo
    }
    const imgStyle = {
        width: '100%',
        height: '17vw',
        objectfit: 'contain'

    }

    return (
        <div className=" col-12 col-md-3 my-4">

            <div className="card">
                <Link to={`/seller/${props.seller.user.username}/${props.seller.id}`}>
                    <img style={imgStyle} src={props.seller.profile_img} className="card-img-top" alt={props.seller.user.username} />
                </Link>
                <div className="card-body shadow">
                    <h4 className="card-title">
                        <Link to={`/seller/${props.seller.user.username}/${props.seller.id}`} >
                            {props?.seller.user.username}
                        </Link>
                    </h4>

                </div>
                <div className="card-footer">
                    {
                        props.seller.categories.map((item) => <Link to={`/category/${item.category__title}/${item.category__id}/`} className="me-1">{item.category__title}</Link>)
                    }


                </div>
            </div>
        </div>
    )
}

export default SingleSeller;