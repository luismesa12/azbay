import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import ItemCard from "../ItemListContainer/ItemList/Item/ItemCard";

import Spinner from "./Spinner";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        const itemCollection = db.collection('Products');
        itemCollection.get().then((value) => {
            let Products = value.docs.map(element => { 
                const auxE = element;
                return { id: auxE.id, ...auxE.data() } 
            })
            console.log(Products)
            const getItems = Products.find(i => i.id === id)
            setItemDetail(getItems);
            setLoading(false);
        });


    }, [id]);

    return (
        <>
            <h1>ItemDetailContainer</h1>
            {loading ? <Spinner /> : <><ItemCard product={itemDetail} /></>}
        </>);
};
export default ItemDetailContainer;