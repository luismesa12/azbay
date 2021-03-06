import BtnCategories from "./BtnCategories"
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import { Divider } from "@material-ui/core";


const Categories = ({ filterProducts, setFilter,setwhCategory }) => {

    const categoryAAA = JSON.parse(JSON.stringify(filterProducts))
    categoryAAA.map(e => {
        e.filterCategory = true
        if (e.category !== 'AAA') {
            e.filterCategory = false
        }
    });
    const categoryBBB = JSON.parse(JSON.stringify(filterProducts))
    categoryBBB.map(e => {
        e.filterCategory = true
        if (e.category !== 'BBB') {
            e.filterCategory = false
        }
    });
    const categoryCCC = JSON.parse(JSON.stringify(filterProducts))
    categoryCCC.map(e => {
        e.filterCategory = true
        if (e.category !== 'CCC') {
            e.filterCategory = false
        }
    });
    const categoryAll = JSON.parse(JSON.stringify(filterProducts))
    categoryAll.map(e => {
        return e.filterCategory = true
    });

    const cAll = () => {
        setFilter(categoryAll);
        (()=>setwhCategory('All'))();
    };
    const cAAA = () => {
        setFilter(categoryAAA);
        (()=>setwhCategory('AAA'))();
    };
    const cBBB = () => {
        setFilter(categoryBBB);
        (()=>setwhCategory('BBB'))();
    };
    const cCCC = () => {
        setFilter(categoryCCC);
        (()=>setwhCategory('CCC'))();
    };

    return (
        <>
            <Box>
                <Typography gutterBottom variant="subtitle2" color="initial" align='center'>Categorías</Typography>
                <Grid container justify="center">
                    <BtnCategories {...{ cAll, cAAA, cBBB, cCCC }} />
                </Grid>
                <Box mt={2}>
                    <Divider  light />
                </Box>
            </Box>
        </>
    )
}

export default Categories;
