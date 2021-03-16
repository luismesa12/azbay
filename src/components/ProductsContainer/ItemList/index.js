import { useProductContext } from "../../../context/ProductContext";
import ItemListCard from "./ItemListCard";

const ItemList = () => {
    const {products} =useProductContext();
    const productsState = products;

    return (
        <>
        <div className="container">
        {
                productsState.map((product) => <span key={product.id}><ItemListCard product={product} /></span>)
        }
        </div>
        </>
    )
};
export default ItemList;