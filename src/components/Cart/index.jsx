import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart, updateCart } from "../../services/actions";
import { allProducts } from "../../utils/dummyData";

const Cart = () => {
    const dispatch = useDispatch();

    //get data from the store
    const result = useSelector((state) => state.cartItems);

    //set quantity of every signle item which is added
    const [quantity, setQuantity] = useState(1);

    //call action when the user click on the cart button
    const handelAddToCart = (item) => {
        dispatch(addToCart({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: quantity,
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
        const updatedProduct = data.find((product) => product.id == id);
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
        const updatedProduct = data.find((product) => product.id == id);
        if (updatedProduct) {
            dispatch(updateCart(updatedProduct));
        }
    }


    return (
        <div className="flex flex-col gap-3">
            {
                allProducts.map((item) => {
                    return (
                        <div className="flex justify-between items-center w-[40%] border border-gray-400 h-32 ml-4 px-4" key={item.id}>
                            <img src={item.image} alt="" className="object-cover h-16 w-16 rounded-md" />
                            <div>
                                <p>Name: {item.name}</p>
                                <p>Price: ${item.price}</p>
                            </div>
                            <div className="flex flex-col gap-3">

                                {
                                    result?.find((product) => product.id === item.id && product.quantity > 0) ?
                                        <div className="flex justify-between items-center bg-pink-500 px-2 py-2 rounded-md text-white">
                                            <button className="w-4 h-full text-xl" onClick={() => increaseQuantity(item.id)}>+</button>
                                            <p>{result?.find((product) => product.id === item.id).quantity}</p>
                                            <button className="w-4 h-full text-2xl" onClick={() => decreaseQuantity(item.id)}>-</button>
                                        </div>
                                        :
                                        <button className="bg-pink-500 px-2 py-2 rounded-md text-white" onClick={() => handelAddToCart(item)}>Add To Cart</button>
                                }
                                {
                                    result.find((product) => product.id === item.id)
                                        ?
                                        <button className="bg-sky-500 px-2 py-2 rounded-md text-white" onClick={() => dispatch(removeToCart(item.id))}>Remove From Cart</button>
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