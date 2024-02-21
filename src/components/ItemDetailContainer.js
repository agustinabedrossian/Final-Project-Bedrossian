import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import {useState, useEffect} from "react"
import NavBar from "./NavBar";
import Card from "./Card";
import "../style/ItemDetailContainer.css";

function ItemDetailContainer () {
    
    const {itemId} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setProduct(await getProductById(itemId));
        };

        fetchData();
    }, [itemId]);

    return (
        <div className="item-detail-container">
  <NavBar className="navbar-detail-container" />
  <div className="item-detail-card-container">
    <Card product={product} />
  </div>
</div>
    )

}

export default ItemDetailContainer;