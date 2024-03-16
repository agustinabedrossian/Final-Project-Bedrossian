import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../style/Checkout.css";
import NavBar from "./NavBar";

function Checkout () {

const {totalAmount, clearCart} = useContext(CartContext);

    return <div>
        <NavBar />
<section class="section">
  <div class="container">
      <h2 class="title mb-12 mb-20-tablet">Checkout</h2>
      <div class="columns is-multiline">
        <div class="column is-12 is-8-desktop">
          <form action="">
            <div class="columns is-multiline">
              <div class="column is-6 mb-4">
                <div class="field">
                  <label class="label mb-4" for="">First Name</label>
                  <div class="control">
                    <input class="input" type="text" />
                  </div>
                </div>
              </div>
              <div class="column is-6 mb-4">
                <div class="field">
                  <label class="label mb-4" for="">Last Name</label>
                  <div class="control">
                    <input class="input" type="text"/>
                  </div>
                </div>
              </div>
              <div class="column is-6 mb-4">
                <div class="field">
                  <label class="label mb-4" for="">Username</label>
                  <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Username" aria-label="Username"/>
                    <span class="icon is-left">
                      <span class="has-background-white">@</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="column is-12 mb-4">
                <div class="columns mb-6">
                  <div class="column is-6 mb-4">
                    <div class="field">
                      <label class="label mb-4" for="">Address 1</label>
                      <div class="control">
                        <input class="input" type="text"/>
                      </div>
                    </div>
                  </div>
                  <div class="column is-6 mb-4">
                    <div class="field">
                      <label class="label mb-4" for="">Address 2</label>
                      <div class="control">
                        <input class="input" type="text"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="column is-12 is-4-desktop">
          <div class="mb-12 has-background-info p-6 p-12-desktop">
            <div class="mb-6 pb-8">
              <h2 class="title has-text-white mb-6 is-size-4">Resumen</h2>
            </div>
            <div class="mb-2 is-flex is-justify-content-space-between is-align-items-center">
              <span class="has-text-light">Order subtotal</span>
              <span class="subtitle has-text-white has-text-weight-bold">${totalAmount}</span>
            </div>
            <div class="mb-2 is-flex is-justify-content-space-between is-align-items-center">
              <span class="has-text-light">Shipping</span>
              <span class="subtitle has-text-white has-text-weight-bold">$11.00</span>
            </div>
            <div class="mb-5 is-flex is-justify-content-space-between is-align-items-center">
              <span class="has-text-light">Tax</span>
              <span class="subtitle has-text-white has-text-weight-bold">$0</span>
            </div>
            <div class="is-flex is-justify-content-space-between is-align-items-center">
              <span class="is-size-5 has-text-white has-text-weight-bold">Total</span>
              <span class="is-size-5 has-text-white has-text-weight-bold">${totalAmount+11}</span>
            </div>
          </div>
          <Link to="/buy">
            <button className="button is-light boton-comprar" onClick={() => clearCart()}>Comprar</button>
          </Link>

        </div>
      </div>
  </div>
</section>
    </div>
}

export default Checkout;