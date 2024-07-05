import { useNavigate } from "react-router-dom"
import Form from "../../components/Form"
export default function AddProduct() {
    const navigate = useNavigate();
    const moveToHomePage = () => {
        navigate('/')
    }
    return (
        <div className="flex flex-col justify-center items-center h-lvh gap-5">
            <p className="cursor-pointer text-2xl text-pink-500 font-semibold" onClick={moveToHomePage}>CartApp</p>
            <Form />
        </div>
    )
} 