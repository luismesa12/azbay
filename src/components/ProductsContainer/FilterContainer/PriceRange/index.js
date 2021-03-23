import { useEffect, useState } from "react";
import FormPriceRange from "./FormPriceRange";

const PriceRange = ({filterProducts, setFilter,setwhRange}) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

   
    const filterRange =(e)=>{
        e.preventDefault();
        const aux = JSON.parse(JSON.stringify(filterProducts));
        aux.map(e=>{
            e.filterPriceRange=true
            if (e.price < min || e.price > max) {
                e.filterPriceRange=false
            }
        })
        setFilter(aux);
        (()=>setwhRange([min,max]))();
    };
    const getMin=(value)=>{
        setMin(value);
    };
    const getMax=(value)=>{
        setMax(value);
    };
    const reset=(e)=>{
        e.current.reset()
        const aux = JSON.parse(JSON.stringify(filterProducts));
        aux.map(e=>{
            return e.filterPriceRange=true
        })
        setFilter(aux);
        (()=>setwhRange([false,false]))();
    };
    
    return (
        <>
            <FormPriceRange getMin={getMin} getMax={getMax} filterRange={filterRange} reset={reset}/>
        </>
    )
}

export default PriceRange
