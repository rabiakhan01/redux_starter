import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart, updateCart } from "../../redux/Cart/actions";
import { allProducts } from "../../utils/dummyData";

const Cart = () => {
    const dispatch = useDispatch();

    //get data from the store
    const result = useSelector((state) => state.cartItems);
    console.log("🚀 ~ Cart ~ result:", result)

    const res = useSelector((state) => state)
    console.log("🚀 ~ state ~ result:", res)
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


    return (
        <div className="flex flex-col gap-2 sm:gap-3">
            {
                allProducts.map((item) => {
                    return (
                        <div className="flex justify-between items-center sm:w-[30rem] lg:w-[40rem] border border-gray-400 h-32 ml-4 px-4" key={item.id}>
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
                                        <button className="bg-pink-500 px-2 py-2 rounded-md text-xs sm:text-base text-white " onClick={() => handelAddToCart(item)}>Add To Cart</button>
                                }
                                {
                                    result.find((product) => product.id === item.id)
                                        ?
                                        <button className="bg-sky-500 px-2 py-2 rounded-md text-white text-xs sm:text-base" onClick={() => dispatch(removeToCart(item.id))}>Remove From Cart</button>
                                        :
                                        ''
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart;