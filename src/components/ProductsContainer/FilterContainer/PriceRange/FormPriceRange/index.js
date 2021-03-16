import { useEffect, useRef } from "react"
import { useSearchContext } from "../../../../../context/SearchContext"

const FormPriceRange = ({getMin, getMax, filterRange, reset}) => {
    const { searchValue } = useSearchContext();
    const formRef = useRef()
    useEffect(() => {
        formRef.current.reset()
    }, [searchValue])
    return (
        <div>
            <span>Rango de Precio: </span>
            <form onSubmit={filterRange} ref={formRef}>
                <input type="number" placeholder="min" onChange={(e)=>{getMin(e.target.value)}}/>
                <input type="number" placeholder="max" onChange={(e)=>{getMax(e.target.value)}}/>
                <button type="submit">Aplicar</button>
                <button type="button" onClick={()=>{reset(formRef)}}>Borrar</button>
            </form>
        </div>
    )
}

export default FormPriceRange;
