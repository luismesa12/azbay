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
            {thereAreMore && <button onClick={showMeMore}>Mostrar +</button>}
        </>
    )
}

export default ShowMore;
