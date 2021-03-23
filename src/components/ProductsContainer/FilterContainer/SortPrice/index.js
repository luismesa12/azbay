import BtnSort from "./BtnSort"
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'

const SortPrice = ({ filterProducts, setFilter,setWhSort }) => {
    const tempProducts = [...filterProducts];

    const ascending = () => {
        tempProducts.sort((a, b) => a.price - b.price);
        setFilter(tempProducts);
        (()=>setWhSort('ascending'))();
    };

    const descending = () => {
        tempProducts.sort((a, b) => b.price - a.price);
        setFilter(tempProducts);
        (()=>setWhSort('descending'))();
    };

    return (
        <Box>
            <Typography gutterBottom align='center' variant="subtitle2" color="initial">Ordenar</Typography>
            <Grid container justify="center">
            <BtnSort ascending={ascending} descending={descending} />
            </Grid>
        </Box>
        
    )
}

export default SortPrice;
