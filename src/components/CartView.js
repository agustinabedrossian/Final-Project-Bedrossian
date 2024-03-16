import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import NavBar from "./NavBar";
import "../style/CartView.css"

function CartView() {
    
    const {cart, clearCart, totalQuantity, totalAmount} = useContext(CartContext)
    

    return <div>
        <NavBar />    
    <section className="section has-background-light is-clipped">
    <div className="container">
      <div className="has-background-white p-8 p-20-desktop">
        <h2 className="title mb-8 mb-20-tablet">Your cart</h2>
        <div className="columns is-multiline is-vcentered">
          <div className="column is-12 is-8-widescreen mb-8 mb-0-widescreen">
            <div className="is-hidden-touch columns is-multiline" >
              <div className="column is-6">
                <h4 className="has-text-grey has-text-weight-bold mb-6" >Description</h4>
              </div>
              <div className="column is-2">
                <h4 className="has-text-grey has-text-weight-bold mb-6" >Price</h4>
              </div>
              <div className="column is-2 has-text-centered">
                <h4 className="has-text-grey has-text-weight-bold mb-6" >Quantity</h4>
              </div>
              <div className="column is-2">
                <h4 className="has-text-grey has-text-weight-bold mb-6" >Subtotal</h4>
              </div>
            </div>
            <div className="mb-12 py-6">
              
              {
                  cart.map((item) => <CartItem product={item}/>)
              }
            </div>
          </div>
          <div className="column is-6 is-4-widescreen">
            <div className="has-background-info p-6 p-16-desktop">
              <h3 className="title is-size-3 has-text-white mb-6">Cart totals</h3>
              <div className="mb-12 py-6">
              <div className="mb-10 is-flex is-justify-content-space-between is-align-items-center cart-total-item">
                <span className="title is-size-5 mb-0 has-text-white has-text-weight-bold">Order total </span>
                <span className="title is-size-5 mb-0 has-text-white has-text-weight-bold">${totalAmount}</span>
              </div>
              <Link to="/checkout">
                <button className="button is-primary is-fullwidth cart-total-item">Checkout</button>
              </Link>
              <button className="button is-primary is-fullwidth cart-total-item" onClick={() => clearCart()}>Limpiar carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  </div>
}

export default CartView;