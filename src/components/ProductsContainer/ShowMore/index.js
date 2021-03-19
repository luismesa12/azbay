import  Button  from "@material-ui/core/Button";
import CachedIcon from '@material-ui/icons/Cached';
import { useEffect, useState } from "react";

const ShowMore = ({ productsState, handleProductsSlice, productsPerPag = 6 }) => {
    const [productsInPag, setProductsInPag] = useState(productsPerPag)
    const [thereAreMore, setThereAreMore] = useState(true)

    useEffect(() => {
        setProductsInPag(productsPerPag)
    }, [productsState]);

    useEffect(() => {
        const slice = productsState.slice(0, productsInPag);
        handleProductsSlice(slice)
        if (productsInPag >= productsState.length) {
            setThereAreMore(false)
        } else {
            setThereAreMore(true)
        }
    }, [productsInPag, productsState]);

    const showMeMore = () => {
        if (productsInPag < productsState.length) {
            setProductsInPag(productsInPag + productsPerPag)
        } else {
            setThereAreMore(false)
        }
    }
    return (
        <>
            {thereAreMore 
            &&<Button 
            startIcon={<CachedIcon/>}
            color="primary"
            variant="outlined"
            fullWidth
            size="large"
            onClick={showMeMore}>
            Mostrar Más Productos</Button>}
        </>
    )
}

export default ShowMore;
