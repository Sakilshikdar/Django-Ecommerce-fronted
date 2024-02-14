import { Link } from "react-router-dom";

function Checkout() {
    return (
        <div className="container mt-5">
            <h3 className="mb-4">
                All Items
            </h3>
            <div className="row">

                <div className="col-md-8 col-12">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <tr>#</tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="image-thumbnail" width={60} alt="..." /> Flux</td>
                                    <td>200$</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="image-thumbnail" width={60} alt="..." /> Django</td>
                                    <td>500$</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="image-thumbnail" width={60} alt="..." /> Ract Js</td>
                                    <td>700$</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" className="image-thumbnail" width={60} alt="..." /> Python</td>
                                    <td>800$</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td className="font-bold">Total</td>
                                    <td>2200$</td>
                                </tr>
                                <tr>
                                    <td colSpan={3} align="center">
                                        <Link to="/categories" className="btn btn-secondary"> Continue Shopping </Link>
                                        <Link className="btn btn-success ms-2"> Process to Pyment</Link>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Checkout;