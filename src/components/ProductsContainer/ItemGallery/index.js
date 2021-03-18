import { useState } from "react";
import ShowMore from "../ShowMore";
import ItemCard from "./ItemCard";

const ItemGallery = ({ productsState }) => {
    const [productsSlice, setproductsSlice] = useState([])
    const handleProductsSlice = (e) => {
        setproductsSlice(e)
    };
    return (
        <>
            <div className='card-columns'>
                {
                    productsSlice.map((product) => <span key={product.id}><ItemCard product={product} /></span>)
                }
            </div>
            <ShowMore {...{ productsState, handleProductsSlice }} productsPerPag={6} />
        </>
    )
};
export default ItemGallery;