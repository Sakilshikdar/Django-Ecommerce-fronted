import SellerSidebar from "./SellerSidebar";
import { useState, useEffect } from "react";
import axios from "axios";

function AddProduct() {
    const vendor_id = (localStorage.getItem('vendor_id'));
    const baseurl = 'https://django-ecommerce-backend.onrender.com/api/'
    const customer_id = localStorage.getItem('customer_id');
    const [categoryData, setCategoryData] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [productData, setProductData] = useState({
        "category": '',
        "title": '',
        'vendor': vendor_id,
        "slug": '',
        "details": '',
        "tags": '',
        "price": '',
        "usd_price": '',
        "demo_url": '',
        "product_file": '',
        "image": ''
    });


    const [ImageUploadError, setImageUploadError] = useState('');
    const [ImageUploadSuccess, setImageUploadSuccess] = useState('');
    const [ProductImgs, setProductImgs] = useState([]);


    const inputHandler = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
    }
    const fileHandler = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.files[0] });
    }



    useEffect(() => {
        fetchData(baseurl + `catagories/`);
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setCategoryData(data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }


    const multipleFileHandler = (event) => {
        var files = event.target.files;
        if (files.length > 0) {
            setProductImgs(files)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Your form submission logic here
        const formData = new FormData();
        formData.append('vendor', productData.vendor);
        formData.append('category', productData.category);
        formData.append('title', productData.title);
        formData.append('slug', productData.slug);
        formData.append('details', productData.details);
        formData.append('tags', productData.tags);
        formData.append('price', productData.price);
        formData.append('usd_price', productData.usd_price);
        formData.append('demo_url', productData.demo_url);
        formData.append('product_file', productData.product_file);
        formData.append('product_imgs', ProductImgs);

        axios.post(baseurl + 'products/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(function (response) {

                if (response.status == 201) {
                    setProductData({
                        "category": '',
                        "title": '',
                        'vendor': '',
                        "slug": '',
                        "details": '',
                        "tags": '',
                        "price": '',
                        "usd_price": '',
                        "demo_url": '',
                        "product_file": '',
                        "product_imgs": '',
                        "image": ''
                    })
                    setErrorMsg(
                        ''
                    );
                    setSuccessMsg(response.statusText);



                    //submit files
                    for (let i = 0; i < ProductImgs.length; i++) {
                        const ImageFormData = new FormData();
                        ImageFormData.append('product', response.data.id);
                        ImageFormData.append('image', ProductImgs[i]);
                        axios.post(baseurl + 'product-imgs/', ImageFormData)
                            .then(function (response) {
                                console.log(response);

                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                        //end upload images

                    }
                    setProductImgs('')


                }

                else {
                    setSuccessMsg('');
                    setErrorMsg(response.statusText);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }



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
                            {successMsg && <div className="text-success mb-2">{successMsg}</div>}
                            {errorMsg && <div className="text-danger mb-2">{errorMsg}</div>}

                            <form>
                                <div className="form-group mb-2">
                                    <label for="Categories">Category</label>
                                    <select className="form-control" id='Categories' name="category" onChange={inputHandler}>
                                        {
                                            categoryData.map((item) => {
                                                return (
                                                    <option value={item.id}>{item.title}</option>
                                                )
                                            })}
                                    </select>
                                </div>
                                <div className="form-group  mb-2">
                                    <label for="Title">Title</label>
                                    <input name="title" value={productData.title} type="text" onChange={inputHandler} className="form-control" id='Title' />
                                </div>
                                <div className="form-group  mb-2">
                                    <label for="slug">Slug</label>
                                    <input name="slug" value={productData.slug} type="text" onChange={inputHandler} className="form-control" id='Title' />
                                </div>
                                <div className="form-group  mb-2">
                                    <label for="BD_Price">BD Price</label>
                                    <input name="price" value={productData.price} type="number" onChange={inputHandler} className="form-control" id='BD_Price' />
                                </div>
                                <div className="form-group  mb-2">
                                    <label for="usd_price">USD Price</label>
                                    <input name="usd_price" value={productData.usd_price} type="number" onChange={inputHandler} className="form-control" id='Price' />
                                </div>

                                <div className="form-group mb-2">
                                    <label for="tags">Tags</label>
                                    <input name="tags" value={productData.tags} onChange={inputHandler} className="form-control" id='tags' />
                                </div>
                                <div className="form-group mb-2">
                                    <label for="demo_url">Demo URL</label>
                                    <input type="url" name="demo_url" value={productData.demo_url} onChange={inputHandler} className="form-control" id='demo_url' />
                                </div>
                                <div className="form-group mb-2">
                                    <label for="details">Details</label>
                                    <textarea name="details" value={productData.details} onChange={inputHandler} rows={8} className="form-control" id='details' />
                                </div>
                                <div className="form-group  mb-2">
                                    <label for="image">Feture Image: </label>
                                    <input name="image" type="file" onChange={fileHandler} className="form-control" id='image' />
                                </div>
                                <div className="form-group  mb-2">
                                    <label for="Product_Imgs">Product Images: </label>
                                    <input name="product_imgs" multiple type="file" onChange={multipleFileHandler} className="form-control" id='Product_Imgs' />
                                </div>
                                <div className="form-group mb-2">
                                    <label for="product_file"> Product File</label>
                                    <input type="file" name="product_file" onChange={fileHandler} className="form-control" id='product_file' />
                                </div>

                                <button onClick={submitHandler} type="button" className="btn btn-primary my-3">Submit</button>
                            </form>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default AddProduct;