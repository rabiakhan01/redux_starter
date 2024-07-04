import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../../redux/Product/actions";
import { GetProduct } from "../../redux/Product/selectors";
import { productList } from "../../redux/Product/actions";
import { useNavigate, useParams } from "react-router-dom";

export default function Form() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getProducts = GetProduct();
    // console.log("🚀 ~ Form ~ getProducts:", getProducts)
    const [product, setProduct] = useState({
        id: '',
        name: '',
        price: '',
        image: '',
    });

    const handelChange = (event) => {
        const { name, value } = event.target;
        setProduct((prev) => ({ ...prev, [name]: value }))
    }

    const submitData = () => {
        if (product.price !== '' && product.name !== '' && product.image !== '') {
            const newId = getProducts.length;
            const newProduct = { ...product, id: newId + 1 };
            dispatch(addProduct(newProduct))
            setProduct({
                id: '',
                name: '',
                price: '',
                image: '',
            })

        }
    }

    useEffect(() => {
        dispatch(productList())
    }, [])

    useEffect(() => {
        if (id) {
            const findProduct = getProducts.find((product) => product.id === id)
            if (findProduct) {
                setProduct({
                    id: id,
                    name: findProduct.name,
                    price: findProduct.price,
                    image: findProduct.image
                })
            }
        }
    }, [getProducts]);

    const updateData = () => {
        const updatedProduct = { ...product }
        dispatch(updateProduct(updatedProduct));
        navigate('/');
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div className="flex justify-center items-center w-full">
            <div className="flex flex-col items-center gap-10 flex-wrap border border-pink-300 px-2 w-11/12 sm:w-[30rem] py-10">
                <h1 className="ml-4 font-semibold text-pink-500 text-xl sm:text-2xl">{id ? 'Update' : 'Add New'} Product</h1>
                <div className="flex flex-col justify-center items-center w-full gap-2">
                    <div className="flex flex-col gap-2 w-full items-center">
                        <label>{id ? 'Update' : 'Enter'} Name</label>
                        <input type="text" onChange={handelChange} name="name" value={product.name} className="h-10 w-11/12 sm:w-80 border border-pink-300 rounded-md px-2" />
                    </div>
                    <div className="flex flex-col gap-2 w-full items-center">
                        <label>{id ? 'Update' : 'Enter'} Price</label>
                        <input type="text" onChange={handelChange} name="price" value={product.price} className="h-10 w-11/12 sm:w-80 border border-pink-300 rounded-md px-2" />
                    </div>
                    <div className="flex flex-col gap-2 w-full items-center">
                        <label>{id ? 'Update' : 'Enter'}  URL</label>
                        <input type="text" onChange={handelChange} name="image" value={product.image} className="h-10 w-11/12 sm:w-80 border border-pink-300 rounded-md px-2" />
                    </div>

                    <div className=" flex flex-col w-full items-center mt-6">
                        <button type="button" className="h-10 w-11/12 sm:w-80 bg-pink-500 text-white rounded-md" onClick={id ? updateData : submitData}>{id ? 'Update' : 'Submit'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

