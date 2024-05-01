import SellerSidebar from "./SellerSidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateProduct() {
    const { product_id } = useParams();
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
        'product_imgs': '',
        "product_file": '',
        "image": ''
    });


    const [ProductImgs, setProductImgs] = useState([]);
    const [IsFeatureImageSelected, setIsFeatureImageSelected] = useState(false);
    const [IsProductFileSelected, setIsProductFileSelected] = useState(false);
    const [IsMultipleImageSelected, setIsMultipleImageSelected] = useState(false);


    const inputHandler = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });

    }
    const fileHandler = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.files[0] });
        if (e.target.name == 'image') {
            setIsFeatureImageSelected(true);
        }
        if (e.target.name == 'product_file') {
            setIsProductFileSelected(true);
        }
    }



    useEffect(() => {
        fetchData(baseurl + `catagories/`);
        fetchProductData(baseurl + `product/` + product_id);
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
    function fetchProductData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setProductData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }




    const multipleFileHandler = (event) => {
        var files = event.target.files;
        if (files.length > 0) {
            setIsMultipleImageSelected(true);
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
        // formData.append('product_imgs', productData.product_imgs);
        if (IsFeatureImageSelected) {
            formData.append('image', productData.image);
        }
        if (IsProductFileSelected) {
            formData.append('product_file', productData.product_file);
        }

        axios.patch(baseurl + 'product/' + product_id + '/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(function (response) {

                if (response.status == 200) {

                    setErrorMsg(
                        ''
                    );
                    setSuccessMsg(response.statusText);


                    //submit files
                    if (IsMultipleImageSelected) {
                        for (let i = 0; i < ProductImgs.length; i++) {
                            const ImageFormData = new FormData();
                            ImageFormData.append('product', response.data.id);
                            ImageFormData.append('image', ProductImgs[i]);
                            axios.post(baseurl + 'product-imgs/?from_update=1', ImageFormData)
                                .then(function (response) {
                                    console.log(response);

                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                            //end upload images

                        }
                    }


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


    function deleteImage(id) {
        axios.delete(baseurl + 'product-img/' + id + '/')
            .then(function (response) {
                if (response.status == 204) {
                    window.location.reload();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    console.log(productData);
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
                                Update Product
                            </h3>
                        </div>
                        <div className="card-body">
                            {successMsg && <div className="text-success mb-2">{successMsg}</div>}
                            {errorMsg && <div className="text-danger mb-2">{errorMsg}</div>}

                            <form>
                                <div className="form-group mb-2">
                                    <label for="Category">Category</label>
                                    <select className="form-control" id='Category' name="category" onChange={inputHandler}>
                                        {
                                            categoryData.map((item) => {
                                                return (
                                                    <option disabled selected={item.id == productData.category} value={item.id}>{item.title}</option>
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

                                    <img src={productData.image} className="image rounded border mt-2 " width={200} />
                                </div>
                                <div className="form-group  mb-2">
                                    <label for="Product_Imgs">Product Images: </label>
                                    <input name="product_imgs" multiple type="file" onChange={multipleFileHandler} className="form-control mb-3" id='Product_Imgs' />
                                    {productData.product_imgs.length > 0 && productData.product_imgs.map((item, index) => {
                                        return (
                                            <span className="image-box d-inline  p-3 my-2" onClick={() => deleteImage(item.id)} >
                                                <i className="trash fas fa-trash text-danger" role="button" style={styles.deleteBtn}></i>
                                                <img src={item.image} className="my-4" width={200} />
                                            </span>
                                        )
                                    }
                                    )}
                                </div>
                                <div className="form-group mb-2">
                                    <label for="product_file"> Product File</label>
                                    <input type="file" name="product_file" onChange={fileHandler} className="form-control" id='product_file' />
                                    {/* <a href={productData.product_file}>{productData.product_file}</a> */}
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


const styles = {
    'deleteBtn': {
        'position': 'absolute',

    }
}
export default UpdateProduct;