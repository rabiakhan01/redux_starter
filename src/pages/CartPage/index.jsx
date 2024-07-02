import Header from "../../components/Header";
import Cart from "../../components/Cart";
import InformationForm from "../../components/InformationForm";

export default function CartPage() {
    return (
        <div className="flex flex-col gap-5">
            <Header />
            <Cart />
            <InformationForm />
        </div>
    )
}