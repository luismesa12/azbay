import { useState } from "react";
import ShowMore from "../ShowMore";
import ItemListCard from "./ItemListCard";

const ItemList = ({ productsState }) => {
    const [productsSlice, setproductsSlice] = useState([])
    const handleProductsSlice = (e) => {
        setproductsSlice(e)
    };

    return (
        <>
            <div className="container">
                {
                    productsSlice.map((product) => <span key={product.id}><ItemListCard product={product} /></span>)
                }
            </div>
            <ShowMore {...{ productsState, handleProductsSlice }} productsPerPag={4} />
        </>
    )
};
export default ItemList;