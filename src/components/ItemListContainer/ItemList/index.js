import { useProductContext } from "../../../context/ProductContext";
import Item from "./Item";

const ItemList = () => {
    const {products} =useProductContext();
    const productsState = products;

    return (
        <>
            <Item productsState={productsState} />
        </>
    )
};
export default ItemList;