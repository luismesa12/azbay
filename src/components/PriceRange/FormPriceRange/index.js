import { useRef } from "react"

const FormPriceRange = ({getMin, getMax, filterRange, reset}) => {
    const formRef = useRef()
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
