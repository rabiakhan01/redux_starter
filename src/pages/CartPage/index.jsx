import Header from "../../components/Header";
import Cart from "../../components/Cart";

export default function CartPage() {
    return (
        <div className="relative flex flex-col gap-5">
            <Header />
            <Cart />
        </div>
    )
}