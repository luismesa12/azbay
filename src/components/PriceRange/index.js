import { useState } from "react";
import FormPriceRange from "./FormPriceRange";

const PriceRange = ({products, setProducts, productsDefault, NotFound}) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    const filterRange =(e)=>{
        e.preventDefault()
        const tempProducts = products.filter((i)=>{
            return i.price >= min && i.price <= max
        });
        NotFound(true)
        setProducts(tempProducts);
        e.target.reset();
    };
    const getMin=(value)=>{
        setProducts(productsDefault);
        setMin(value);
    };
    const getMax=(value)=>{
        setProducts(productsDefault);
        setMax(value);
    };

    return (
        <>
            <FormPriceRange getMin={getMin} getMax={getMax} filterRange={filterRange}/>
        </>
    )
}

export default PriceRange
