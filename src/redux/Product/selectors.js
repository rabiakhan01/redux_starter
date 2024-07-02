import { useSelector } from "react-redux"

export const GetProduct = () => {
    const result = useSelector((state) => state.productData);
    return result;
}