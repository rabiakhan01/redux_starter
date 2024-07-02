import React, { useEffect, useState } from "react";
import images from "../../assets/images/images";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/Product/actions";

const Header = () => {
    const dispatch = useDispatch();
    const result = useSelector((state) => state.cartItems);
    //console.log("🚀 ~ Header ~ result:", result)
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        const total = result?.reduce((x, y) => (x + y.quantity), 0);
        setTotalQuantity(total)
    }, [result])

    return (
        <nav className="sticky top-0 flex justify-between px-5 py-5 bg-white">
            <h1 className="text-pink-500 font-semibold text-xl">CartApp</h1>
            <div className="relative h-8 w-8">
                <img src={images.cart} alt="cart" className="object-cover" />
                <p className="flex absolute right-0 -top-2 bg-pink-500 w-5 h-5 rounded-full justify-center items-center text-sm text-white">{totalQuantity ? totalQuantity : '+'}</p>
            </div>
            <button className="bg-pink-500 px-2 py-2 rounded-md text-xs sm:text-base text-white " onClick={() => dispatch(addProduct())}>Show Product</button>
        </nav>
    )
}

export default Header;