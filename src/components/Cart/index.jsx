import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart, updateCart } from "../../redux/Cart/actions";
import { allProducts } from "../../utils/dummyData";
import { GetProduct } from "../../redux/Product/selectors";
import { productList } from "../../redux/Product/actions";
import images from "../../assets/images/images";

const Cart = () => {
    const dispatch = useDispatch();

    //get data from the store
    const result = useSelector((state) => state.cartItems);

    const productsData = GetProduct();
    const [modal, setModal] = useState({
        id: '',
        show: false
    });

    //call action when the user click on the cart button
    const handelAddToCart = (item) => {
        dispatch(addToCart({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1,
        }))
    }

    const increaseQuantity = (id) => {
        const data = result.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
            }
            else {
                return item
            }
        })
        const updatedProduct = data.find((product) => product.id === id);
        if (updatedProduct) {
            dispatch(updateCart(updatedProduct));
        }
    }

    const decreaseQuantity = (id) => {
        const data = result.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
            }
            else {
                return item
            }
        })
        const updatedProduct = data.find((product) => product.id === id);
        if (updatedProduct) {
            dispatch(updateCart(updatedProduct));
        }
    }
    useEffect(() => {
        dispatch(productList())
    }, [])

    const openModal = (id) => {
        setModal({
            id: id,
            show: true
        });
    }
    const closeModal = (id) => {
        setModal({
            id: id,
            show: false
        })
    }
    return (
        <div className="flex flex-col gap-2 sm:gap-3">
            {
                productsData.map((item) => {
                    return (
                        <div className={`relative`} key={item.id}>
                            <div className="absolute z-20 top-2 left-8">
                                {

                                    modal.show && modal.id === item.id ?
                                        <img src={images.cross} alt="" className="z-20 h-2.5 w-2.5 mb-1 cursor-pointer" onClick={() => closeModal(item.id)} />
                                        :
                                        <img src={images.more} alt="" className="z-20 h-4 w-4 cursor-pointer" onClick={() => openModal(item.id)} />
                                }
                                {
                                    modal.show && modal.id === item.id &&
                                    <div className="bg-pink-500 flex flex-col gap-2 px-2 border border-pink-300 rounded-md py-5 text-white">
                                        <p className="cursor-pointer">Delete Product</p>
                                        <p className="cursor-pointer">Update Product</p>
                                    </div>
                                }
                            </div>
                            <div className={`flex justify-between items-center sm:w-[30rem] lg:w-[40rem] border border-gray-400 h-32 ml-4 px-4`}>
                                <img src={item.image} alt="" className="object-cover h-12 w-12 sm:h-16 sm:w-16 rounded-md" />
                                <div className="text-sm sm:text-base">
                                    <p>Name: {item.name}</p>
                                    <p>Price: ${item.price}</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {
                                        result?.find((product) => product.id === item.id && product.quantity > 0) ?
                                            <div className="flex justify-between items-center bg-pink-500 px-2 sm:py-2 rounded-md text-white">
                                                <button className="w-4 h-full text-xs sm:text-xl" onClick={() => increaseQuantity(item.id)}>+</button>
                                                <p className="text-xs sm:text-base">{result?.find((product) => product.id === item.id).quantity}</p>
                                                <button className="w-4 h-full text-2xl" onClick={() => decreaseQuantity(item.id)}>-</button>
                                            </div>
                                            :
                                            <button className="bg-pink-500 px-2 py-2 rounded-md text-xs sm:text-base text-white" disabled={modal.show ? true : false} onClick={() => handelAddToCart(item)}>Add To Cart</button>
                                    }
                                    {
                                        result.find((product) => product.id === item.id)
                                            ?
                                            <button className="bg-sky-500 px-2 py-2 rounded-md text-white text-xs sm:text-base" disabled={modal.show ? true : false} onClick={() => dispatch(removeToCart(item.id))}>Remove From Cart</button>
                                            :
                                            ''
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart;