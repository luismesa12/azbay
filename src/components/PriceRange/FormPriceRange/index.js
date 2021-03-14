
const FormPriceRange = ({getMin, getMax, filterRange}) => {
    return (
        <div>
            <span>Rango de Precio: </span>
            <form onSubmit={filterRange}>
                <input type="number" placeholder="min" onChange={(e)=>{getMin(e.target.value)}}/>
                <input type="number" placeholder="max" onChange={(e)=>{getMax(e.target.value)}}/>
                <button type="submit">Aplicar</button>
            </form>
        </div>
    )
}

export default FormPriceRange;
