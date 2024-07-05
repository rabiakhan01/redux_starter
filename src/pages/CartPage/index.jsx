import Header from "../../components/Header";
import Cart from "../../components/Cart";
import { GetResponse } from "../../redux/Product/selectors";
import ErrorPage from "../../components/404";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { endPointExists } from "../../redux/Product/actions";

export default function CartPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(endPointExists(0))
    }, [])

    const response = GetResponse();

    return (
        <div className="flex flex-col gap-5">

            {
                response.error ?
                    <ErrorPage />
                    :
                    <>
                        <Header />
                        <Cart />
                    </>
            }
        </div >
    )
}