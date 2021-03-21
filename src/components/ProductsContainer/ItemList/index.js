import { useState } from "react";
import ShowMore from "../ShowMore";
import ItemListCard from "./ItemListCard";
import Box from '@material-ui/core/Box';


const ItemList = ({ productsState }) => {
    const [productsSlice, setproductsSlice] = useState([])
    const handleProductsSlice = (e) => {
        setproductsSlice(e)
    };

    return (
        <>
        <Box pt={5}>
        
                {
                    productsSlice.map((product) => 
                    <Box pb={1} key={product.id}>
                        <ItemListCard product={product} />
                    </Box>)
                }
            <Box px={5} pb={5}>
                <ShowMore {...{ productsState, handleProductsSlice }} productsPerPag={4} />
            </Box>
            
        </Box>
            
        </>
    )
};
export default ItemList;