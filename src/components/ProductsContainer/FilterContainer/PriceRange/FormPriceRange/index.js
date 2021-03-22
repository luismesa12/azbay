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
                <Grid container spacing={1} alignItems='center'>
                    <Grid item xs={12}>

                        <Typography align='center' variant="subtitle2" color="initial">Rango de Precio</Typography>

                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>

                            <Grid item xs={12}>
                                <TextField
                                    type="number"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    label="Precio min"
                                    onChange={(e) => { getMin(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
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
                                <Button type="submit" variant="outlined" color="primary">
                                    Aplicar
                                </Button>
                                <IconButton color="primary" aria-label="Borrar" onClick={() => { reset(formRef) }}>
                                    <BackspaceIcon />
                                </IconButton>          
                    </Grid>
                </Grid>
            </form>
    )
}

export default FormPriceRange;
