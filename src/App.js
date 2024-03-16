import "bulma/css/bulma.css";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./context/CartContext";
import CartView from "./components/CartView";
import Checkout from "./components/Checkout";
import SuccessfullBuy from "./components/SuccessfullBuy";

function App() {
    return <div>
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<CartView />}/>
                    <Route path="/checkout" element={<Checkout />}/>
                    <Route path="/buy" element={<SuccessfullBuy />}/>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    </div>
}

export default App;