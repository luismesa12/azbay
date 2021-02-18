import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";

const Item = ({ productsState }) => {
    return (
        <>
            {
                productsState.map((product) => <span key={product.id}><ItemCard product={product} /></span>)
            }
        </>
    )
};
export default Item;