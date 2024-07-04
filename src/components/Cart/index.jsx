import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart, updateCart } from "../../redux/Cart/actions";
import { GetProduct } from "../../redux/Product/selectors";
import { deleteProduct, productList } from "../../redux/Product/actions";
import images from "../../assets/images/images";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();

    //get data from the store
    const result = useSelector((state) => state.cartItems);
    const navigate = useNavigate();
    const productsData = GetProduct();
    //console.log("🚀 ~ Cart ~ productsData:", productsData)
    const [modal, setModal] = useState({
        id: '',
        show: false
    });

    const [deleteModal, setDeleteModal] = useState(false);



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
    }, [, deleteModal])

    const openModal = (id) => {
        setModal({
            id: id,
            show: true
        });
        document.body.classList.add('overflow-hidden');
    }
    const closeModal = (id) => {
        setModal({
            id: id,
            show: false
        });
        document.body.classList.remove('overflow-hidden');

    }

    const handelDeleteModal = (id) => {
        setModal({
            id: id,
            show: false
        });
        setDeleteModal(true);
        document.body.classList.add('overflow-hidden');
        window.scroll({
            top: 90,
            behavior: 'instant'
        })

    }
    const deleteItem = () => {
        dispatch(deleteProduct(modal.id));
        setDeleteModal(false);
        document.body.classList.remove('overflow-hidden');
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })

    }

    const cancelDeleteItem = () => {
        setDeleteModal(false);
        document.body.classList.remove('overflow-hidden');
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className={`flex flex-col justify-center items-center gap-2 sm:gap-3 `}>
            {
                productsData.map((item) => {
                    return (
                        <div className={`relative w-full ${deleteModal ? 'blur-sm' : ''}`} key={item.id}>
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
                                        <p className="cursor-pointer" onClick={() => handelDeleteModal(item.id)}>Delete Product</p>
                                        <p className="cursor-pointer" onClick={() => navigate(`/update-product/${item.id}`)}>Update Product</p>
                                    </div>
                                }
                            </div>
                            <div className={`flex justify-between items-center w-11/12 md:w-[30rem] lg:w-[40rem] border border-gray-400 h-32 ml-4 px-2 sm:px-4`}>
                                <img src={item.image} alt="" className="object-cover h-9 w-9 sm:h-16 sm:w-16 rounded-md" />
                                <div className="text-xs sm:text-base">
                                    <p>Name: {item.name}</p>
                                    <p>Price: ${item.price}</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {
                                        result.find((product) => product.id === item.id && product.quantity > 0) ?
                                            <div className="flex justify-between items-center bg-pink-500 px-2 sm:py-2 rounded-md text-white">
                                                <button className="w-4 h-full text-xs sm:text-xl" onClick={() => increaseQuantity(item.id)}>+</button>
                                                <p className="text-xs sm:text-base">{result.find((product) => product.id === item.id).quantity}</p>
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
            {
                deleteModal ?
                    <div className="absolute top-96 flex flex-col gap-y-5 w-96 md:w-[30rem] h-48 border border-sky-300 bg-slate-50 rounded-md">
                        <div className="flex justify-between pr-5 pt-5">
                            <p className="text-lg pl-3 text-pink-500 font-medium">Delete The Record</p>
                        </div>
                        <div className="text-base font-medium text-primaryColor pl-3">
                            <h1>Are you sure you want to delete this record?</h1>
                        </div>
                        <div className="flex gap-3 text-sm font-medium text-textColor justify-end pr-5 pt-6">
                            <button className="bg-sky-500 px-2 py-2 rounded-md text-xs sm:text-base text-white" onClick={cancelDeleteItem}>Cancel</button>
                            <button className="bg-pink-500 px-2 py-2 rounded-md text-xs sm:text-base text-white" onClick={deleteItem}>Delete</button>
                        </div>
                    </div>
                    :
                    ''
            }
        </div>
    )
}

export default Cart;