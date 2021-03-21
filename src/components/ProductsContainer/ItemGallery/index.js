import { useState } from "react";
import ShowMore from "../ShowMore";
import ItemCard from "./ItemCard";
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';

const ItemGallery = ({ productsState }) => {
    const [productsSlice, setproductsSlice] = useState([])
    const handleProductsSlice = (e) => {
        setproductsSlice(e)
    };
    return (
            <Box pt={5}>
                <Grid container spacing={4}>

                    {
                        productsSlice.map((product) =>
                            <Grid key={product.id} item xs={12} sm={6} md={4}>
                                <ItemCard product={product} />
                            </Grid>
                        )
                    }

                </Grid>
                <Box p={5}>
                    <ShowMore {...{ productsState, handleProductsSlice }} productsPerPag={6} />
                </Box>
            </Box>
    )
};
export default ItemGallery;