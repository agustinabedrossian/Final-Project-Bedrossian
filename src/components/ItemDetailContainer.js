import { useParams } from "react-router-dom";
import {useState, useEffect} from "react"
import NavBar from "./NavBar";
import "../style/ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import {db} from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

function ItemDetailContainer () {
    
    const {itemId} = useParams();
    const [product, setProduct] = useState({});
    const itemsCollectionRef = collection(db, "products")


    const getItem = async () => {
        const data = await getDocs(itemsCollectionRef);
        
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
      
        const item = filteredData.find((doc) => doc.id === itemId);

        setProduct(item);

        return product;
    }


    useEffect(() => {
       
        getItem();
    }, [itemId]);

    return (
        <div className="item-detail-container">
  <NavBar className="navbar-detail-container" />
  <div className="item-detail-card-container">
  <ItemDetail product={product}/>
  </div>
</div>
    )

}

export default ItemDetailContainer;