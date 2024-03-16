import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "./Card";
import "../style/ItemListContainer.css"
import NavBar from "./NavBar";
import {db} from "../config/firebase";
import {collection, getDocs} from "firebase/firestore";


function ItemListContainer() {

    const itemsCollectionRef = collection(db, "products")
    const { categoryId } = useParams();
    const  [itemList, setItemList] = useState([]);
  
    const getItemList = async () => {
      const data = await getDocs(itemsCollectionRef);
      
      let filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));

      if(categoryId!=null){
        filteredData = filteredData.filter((doc) => doc.category === categoryId)
    }
  
      setItemList(filteredData);
    }


    useEffect(() => {
        
        getItemList();
    }, [categoryId]);


    return (

        <div>
            <NavBar />
            <div className="products-container">
                {
                    itemList.map((item) => {
                        return (
                            <Card product={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemListContainer;
