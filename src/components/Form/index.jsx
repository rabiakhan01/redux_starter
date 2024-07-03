import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/Product/actions";
import { GetProduct } from "../../redux/Product/selectors";
import { productList } from "../../redux/Product/actions";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getProducts = GetProduct();
    console.log("🚀 ~ Form ~ getProducts:", getProducts)
    const [product, setProduct] = useState({
        id: '',
        name: '',
        price: '',
        image: '',
    });

    const [data, setData] = useState(false);

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
            navigate('/');
        }
    }
    useEffect(() => {
        dispatch(productList())
    }, [])
    return (
        <div className="flex justify-center items-center h-lvh">
            <div className="flex flex-col items-center gap-10 flex-wrap border border-pink-300 px-10 py-16">
                <h1 className="ml-4 font-semibold text-pink-500 text-2xl">Add New Product</h1>
                <div className="flex flex-col gap-4 ml-4 m">
                    <div className="flex gap-4 justify-between w-[30rem]">
                        <label>Enter Product Name</label>
                        <input type="text" onChange={handelChange} name="name" value={product.name} className="h-10 w-80 border border-pink-300 rounded-md px-2" />
                    </div>
                    <div className="flex gap-4 justify-between w-[30rem]">
                        <label>Enter Product Price</label>
                        <input type="text" onChange={handelChange} name="price" value={product.price} className="h-10 w-80 border border-pink-300 rounded-md px-2" />
                    </div>
                    <div className="flex gap-4 justify-between w-[30rem]">
                        <label>Enter Image URL</label>
                        <input type="text" onChange={handelChange} name="image" value={product.image} className="h-10 w-80 border border-pink-300 rounded-md px-2" />
                    </div>

                    <div className="flex justify-end w-[30rem]">
                        <button type="button" className="px-6 py-2 bg-pink-500 text-white rounded-md" onClick={submitData}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

