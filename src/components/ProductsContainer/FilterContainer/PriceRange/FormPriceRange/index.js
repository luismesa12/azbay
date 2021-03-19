import { useEffect, useRef } from "react"
import { useSearchContext } from "../../../../../context/SearchContext"
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import BackspaceIcon from '@material-ui/icons/Backspace';

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
                <IconButton color="primary" aria-label="Borrar" onClick={()=>{reset(formRef)}}>
                  <BackspaceIcon/>
                </IconButton>
                <Button type="submit" variant="outlined" color="primary">
                    Aplicar
                </Button>
                
            </form>
        </div>
    )
}

export default FormPriceRange;
