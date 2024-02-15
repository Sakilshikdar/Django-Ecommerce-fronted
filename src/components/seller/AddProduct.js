import SellerSidebar from "./SellerSidebar";

function AddProduct() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                    </div>
                    <div className="col-md-9 mb-2 col-12">
                        <div className="card-header">

                            <h3 className="mb-4">
                                Add Product
                            </h3>
                        </div>
                        <div className="card-body">


                            <form>
                                <div className="form-group mb-2">
                                    <label for="Category">Category</label>
                                    <select className="form-control" id='Category'>
                                        <option>python</option>
                                        <option>php</option>
                                        <option>java</option>
                                        <option>react</option>
                                    </select>
                                </div>
                                <div className="form-group  mb-2">
                                    <label for="Title">Title</label>
                                    <input type="text" className="form-control" id='Title' />
                                </div>
                                <div className="form-group  mb-2">
                                    <label for="Price">Price</label>
                                    <input type="number" className="form-control" id='Price' />
                                </div>
                                <div className="form-group mb-2">
                                    <label for="Description">Description</label>
                                    <textarea rows={8} className="form-control" id='Description' />
                                </div>
                                <div className="form-group  mb-2">
                                    <label for="ProductImg">Products Images: </label>
                                    <input type="file" className="form-control" id='ProductImg' />
                                    <button type="submit" className="btn btn-primary my-3">Submit</button>
                                </div>
                            </form>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default AddProduct;