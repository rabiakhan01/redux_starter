
import { useEffect } from "react";
import images from "../../assets/images/images";
import { GetResponse } from "../../redux/Product/selectors";
import { useDispatch } from "react-redux";
import { endPointExists } from "../../redux/Product/actions";

const ErrorPage = () => {
    const dispatch = useDispatch();
    const getResponse = GetResponse()

    useEffect(() => {
        dispatch((endPointExists(0)))
    }, [])
    return (
        <div className="flex justify-center gap-6 items-center h-lvh">
            <div className="flex w-96">
                <img src={images.error} alt="error" className="" />
            </div>
            <div className="">
                <p className="text-2xl font-semibold text-red-500">{getResponse.error.response.data}</p>
                <p className="text-xl">{getResponse.error.message}</p>
                <p>{getResponse.error.code}</p>
                <div>
                    <p>Try</p>
                    <ol className="text-gray-500">
                        <li>Please check that the website address is spelled correctly.</li>
                        <li></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;