import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";
import { useProductContext } from "../../context/ProductContext";
import DetailCard from "./DetailCard";


const ItemDetailContainer = () => {
    const { products } = useProductContext();
    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (products.length>0) {
            const getItems = products.find(i => i.id === id)
            setItemDetail(getItems);
            setLoading(false);
        }
    }, [products]);

    return (
        <>
            <h1>ItemDetailContainer</h1>
            {loading ? <Spinner /> : <><DetailCard product={itemDetail}/></>}
        </>);
};
export default ItemDetailContainer;