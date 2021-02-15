import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../ItemListContainer/ItemList/Item/ItemCard";
import Products from "../Products";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [itemDetail, setItemDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() => resolve(Products.find(i=>i.id.toString()===id)), 1500)
        });

        getItems.then((res) => {
            setItemDetail(res);
            setLoading(false);
        });

    }, [id]);

    return (
        <>
            <h1>ItemDetailContainer</h1>
            {loading?<Spinner/>:<ItemCard product={itemDetail} />}
        </>);
};
export default ItemDetailContainer;