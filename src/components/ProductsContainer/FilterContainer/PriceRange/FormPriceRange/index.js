import { useEffect, useRef } from "react"
import { useSearchContext } from "../../../../../context/SearchContext"
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import BackspaceIcon from '@material-ui/icons/Backspace';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


const FormPriceRange = ({ getMin, getMax, filterRange, reset }) => {
    const { searchValue } = useSearchContext();
    const formRef = useRef()
    useEffect(() => {
        formRef.current.reset()
    }, [searchValue])
    return (
        <form onSubmit={filterRange} ref={formRef}>
            <Grid container spacing={0}  style={{textAlign:'center'}} justify="center">
                <Grid item xs={12}>

                    <Typography gutterBottom align='center' variant="subtitle2" color="initial">Rango de Precio</Typography>

                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={1}>

                        <Grid item xs={6}>
                            <TextField
                                type="number"
                                variant="outlined"
                                size="small"
                                
                                label="Precio min"
                                onChange={(e) => { getMin(e.target.value) }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                type="number"
                                variant="outlined"
                                size="small"
                                label="Precio max"
                                onChange={(e) => { getMax(e.target.value) }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center" alignItems="center">
                        <Button type="submit" variant="outlined" color="primary" size="small">
                            Aplicar
                        </Button>
                        <IconButton color="primary" aria-label="Borrar" onClick={() => { reset(formRef) }}>
                            <BackspaceIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default FormPriceRange;
