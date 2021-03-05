import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../ItemListContainer/ItemList/Item/ItemCard";
import Spinner from "./Spinner";
import { useProductContext } from "../../context/ProductContext";


const ItemDetailContainer = () => {
    const { products } = useProductContext();
    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        
        console.log('ItemDetailContainer', products)
        const getItems = products.find(i => i.id === id)
        setItemDetail(getItems);
        setLoading(false);

    }, [id]);

    return (
        <>
            <h1>ItemDetailContainer</h1>
            {loading ? <Spinner /> : <><ItemCard product={itemDetail} /></>}
        </>);
};
export default ItemDetailContainer;