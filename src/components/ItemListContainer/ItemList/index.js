import { useEffect, useState } from "react";
import Products from "../../Products";
import Item from "./Item";

const ItemList = () => {
    const [productsState, setProductsState] = useState([]);

    useEffect(() => {
        const productPromise = new Promise((resolve) => {
            setTimeout(() => resolve(Products), 1500)
        });

        productPromise.then((res) => {
            setProductsState(res);
        });

    }, []);

    return (
        <>
            <Item productsState={productsState} />
        </>
    )
};
export default ItemList;