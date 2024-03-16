    import {useContext, useState} from "react";
    import "../style/ItemDetail.css"
    import {CartContext} from "../context/CartContext"

    function ItemDetail({product}) {

        const [itemQuantity, setItemQuantity] = useState(0);
        const {addCartItem} = useContext(CartContext)
        
        const handleAddItem = () => {
            addCartItem(product, itemQuantity);
        }
        
        const plusItemQuantity = () => {
            if(itemQuantity<product.stock)
                setItemQuantity(itemQuantity + 1)
        }

        const substractItemQuantity = () => {
            if(itemQuantity > 0)
                setItemQuantity(itemQuantity - 1)
        }


        return <div>
            <div className="card">
                <div className="card-image">
                    <figure className="image product-image">
                        <img className="" src={product.img} alt="Placeholder image" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{product.title}</p>
                            <p className="subtitle is-6">{product.description}</p>
                            <p>Stock: {product.stock}</p>
                        </div>
                    </div>
                    <div className="content">
                        <p>${product.price}</p>
                    </div>
                    <div className="columns">
                            <div className="column button-container">
                                <button  onClick={plusItemQuantity} className="button is-success">+</button>
                            </div>
                            <div className="item-quantity">
                            <p className="subtitle">{itemQuantity}</p>
                            </div>
                            <div className="column button-container">
                                <button onClick={substractItemQuantity} className="button is-success">-</button>
                            </div>
                            </div>       
                    <button className="button is-light" onClick={handleAddItem}>Agregar al carrito</button>         
                </div>
            </div>
        </div>
    }

    export default ItemDetail;