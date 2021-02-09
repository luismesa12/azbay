import { useEffect, useState } from "react";
import ItemCard from "../ItemListContainer/ItemList/Item/ItemCard";
import Products from "../Products";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() => resolve(Products[0]), 2000)
        });

        getItems.then((res) => {
            setItemDetail(res);
            setLoading(false);
        });

    }, []);

    return (
        <>
            <h1>ItemDetailContainer</h1>
            {loading?<Spinner/>:<ItemCard product={itemDetail} />}
        </>);
};
export default ItemDetailContainer;