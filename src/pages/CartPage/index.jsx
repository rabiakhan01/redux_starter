import Header from "../../components/Header";
import Cart from "../../components/Cart";
import { GetProduct } from "../../redux/Product/selectors";
import images from "../../assets/images/images";

export default function CartPage() {
    const getProduct = GetProduct();
    return (
        <div className="flex flex-col gap-5">

            {
                getProduct.error ?
                    <div className="flex justify-center gap-6 items-center h-lvh">
                        <div className="flex w-96">
                            <img src={images.error} alt="error" className="" />
                        </div>
                        <div className="">
                            <p className="text-2xl font-semibold text-red-500">{getProduct.error.response.data}</p>
                            <p className="text-xl">{getProduct.error.message}</p>
                            <p>{getProduct.error.code}</p>
                            <div>
                                <p>Try</p>
                                <ol className="text-gray-500">
                                    <li>Please check that the webite address is spelled correctly.</li>
                                    <li></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <Header />
                        <Cart />
                    </>
            }
        </div >
    )
}