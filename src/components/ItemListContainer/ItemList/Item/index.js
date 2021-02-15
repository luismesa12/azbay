import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";

const Item = ({ productsState }) => {
    return (
        <>
            {
                productsState.map((product) => <span key={product.id}><Link to={`item/${product.id}`}><ItemCard product={product} /></Link></span>)
            }
        </>
    )
};
export default Item;