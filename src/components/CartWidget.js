import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import "../style/CartWidget.css"

function CartWidget() {

    const {totalQuantity} = useContext(CartContext);
    console.log(totalQuantity)


    return <div className="cart-widget">
        <span className="icon-text">
            <a>
                <span className="icon">
                    <FaShoppingCart className="cart-icon" />
                </span>
                <span>{totalQuantity}</span>
            </a>
        </span>
    </div>
}

export default CartWidget; 