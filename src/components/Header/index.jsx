import React from "react";
import images from "../../assets/images/images";

const Header = (props) => {
    console.log("🚀 ~ Header ~ props:", props)
    return (
        <nav className="flex justify-end px-5 py-5">
            <div className="relative h-8 w-8">
                <img src={images.cart} alt="cart" className="object-cover" />
                <p className="flex absolute right-0 -top-3 bg-pink-500 w-5 h-5 rounded-full justify-center items-center text-sm">{props.cartData?.length ? props.cartData.length : '+'}</p>
            </div>
        </nav>
    )
}

export default Header;