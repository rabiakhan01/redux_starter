import React from "react";
import images from "../../assets/images/images";
const Cart = (props) => {
    return (
        <div>
            <div className="flex justify-between items-center w-[40%] border border-gray-400 h-40 ml-4 px-2">
                <img src={images.colliflower} alt="" className="object-cover h-20 w-20 rounded-md" />
                <div>
                    <p>Name: ColliFlower</p>
                    <p>Price: $10</p>
                </div>
                <div className="flex flex-col gap-3">
                    <button className="bg-pink-500 px-2 py-2 rounded-md text-white" onClick={() => props.addToCartHandler({ price: '2500', name: 'cooliflower' })}>Add To Cart</button>
                    <button className="bg-sky-500 px-2 py-2 rounded-md text-white" onClick={() => props.removeToCartHandler()}>Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;