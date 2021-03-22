import BtnProductsView from "./BtnProductsView"
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'

const ProductsView = ({ view, setViewState }) => {

    const viewList = () => {
        const tempView = { ...view };
        tempView.gallery = false;
        tempView.list = true;

        setViewState(tempView);
    };

    const viewGallery = () => {
        const tempView = { ...view };
        tempView.list = false;
        tempView.gallery = true;
        setViewState(tempView);
    };

    return (
        <div>
            <Box>
                <Typography variant="subtitle2" color="initial" align='center'>Ver</Typography>
                <Grid container justify="center">
                    <BtnProductsView {...{ viewList, viewGallery }} />
                </Grid>
            </Box>
        </div>
    )
}

export default ProductsView;
