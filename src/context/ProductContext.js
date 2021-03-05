import { createContext, useContext, useEffect, useState } from "react";
import db from "../firebase";

export const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);



export const ProductProvider = ({ children }) => {
    const itemCollection = db.collection('Products');
    const [products, setProducts] = useState([]);
    useEffect(() => {
        itemCollection.get().then((value) => {
            let aux = value.docs.map(element => {
                const auxE = element; 
                return {id: auxE.id, ...auxE.data()}
            })
            console.log('aux', aux)
            setProducts(aux)
        });
    }, []);


    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
};