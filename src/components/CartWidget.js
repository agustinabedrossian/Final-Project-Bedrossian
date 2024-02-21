import { FaShoppingCart } from "react-icons/fa";
import "../style/CartWidget.css"

function CartWidget() {
    return <div className="cart-widget">
        <span className="icon-text">
            <a>
                <span className="icon">
                    <FaShoppingCart className="cart-icon" />
                </span>
                <span>6</span>
            </a>
        </span>
    </div>
}

export default CartWidget; 