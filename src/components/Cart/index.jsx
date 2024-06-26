import React from "react";
import images from "../../assets/images/images";
import { useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../../services/actions";
import { allProducts } from "../../utils/dummyData";

const Cart = () => {
    const dispatch = useDispatch();
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
                                <button className="bg-pink-500 px-2 py-2 rounded-md text-white" onClick={() => dispatch(addToCart({
                                    id: 1,
                                    name: 'Colliflower',
                                    price: '10'
                                }))}>Add To Cart</button>
                                <button className="bg-sky-500 px-2 py-2 rounded-md text-white" onClick={() => dispatch(removeToCart())}>Remove To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart;