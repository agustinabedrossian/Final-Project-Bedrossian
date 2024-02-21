import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllProducts, getProductsByCategory } from "../data/products";
import Card from "./Card";
import "../style/ItemListContainer.css"
import NavBar from "./NavBar";


function ItemListContainer() {

    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let itemsList;

            if (categoryId) {
                console.log(categoryId);
                itemsList = await getProductsByCategory(categoryId);
            } else {
                itemsList = await getAllProducts();
            }

            setProducts(itemsList);
        };

        fetchData();
    }, [categoryId]);


    return (

        <div>
            <NavBar />
            <div className="products-container">
                {
                    products.map((product) => {
                        return (
                            <Card product={product} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemListContainer;
