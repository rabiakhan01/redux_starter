import { useSelector } from "react-redux"

export const GetProduct = () => {
    const result = useSelector((state) => state.productData);
    // console.log("🚀 ~ GetProduct ~ result:", result.data);
    return result;
}