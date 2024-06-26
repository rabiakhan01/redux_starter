import React from "react";
import images from "../../assets/images/images";
import { useSelector } from "react-redux";

const Header = () => {

    const result = useSelector((state) => state);
    console.log("🚀 ~ Header ~ result:", result.cartItems)

    return (
        <nav className="flex justify-end px-5 py-5">
            <div className="relative h-8 w-8">
                <img src={images.cart} alt="cart" className="object-cover" />
                <p className="flex absolute right-0 -top-2 bg-pink-500 w-5 h-5 rounded-full justify-center items-center text-sm text-white">{result.cartItems?.length ? result.cartItems.length : '+'}</p>
            </div>
        </nav>
    )
}

export default Header;