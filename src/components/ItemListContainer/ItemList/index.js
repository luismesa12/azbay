import { useEffect, useState } from "react";
import db from "../../../firebase";
// import Products from "../../Products";
import Item from "./Item";

const ItemList = () => {
    const [productsState, setProductsState] = useState([]);

    useEffect(() => {
        const itemCollection = db.collection('Products');
        itemCollection.get().then((value) => {
            let aux = value.docs.map(element => element.data())
            console.log(aux)
            setProductsState(aux)
        });
    }, []);
    // useEffect(() => {
    //     const productPromise = new Promise((resolve) => {
    //         setTimeout(() => resolve(Products), 1500)
    //     });

    //     productPromise.then((res) => {
    //         setProductsState(res);
    //     });

    // }, []);

    return (
        <>
            <Item productsState={productsState} />
        </>
    )
};
export default ItemList;