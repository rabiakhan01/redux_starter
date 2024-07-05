import { useSelector } from "react-redux"

export const GetResponse = () => {
    const result = useSelector((state) => state.Response);
    // console.log("🚀 ~ GetProduct ~ result:", result.data);
    return result;
}