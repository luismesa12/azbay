import { useEffect, useState } from "react";
import { useSearchContext } from "../../../context/SearchContext";
import ItemGallery from "../ItemGallery";
import Spinner from "../../Spinner"
import SortPrice from "./SortPrice";
import PriceRange from "./PriceRange";
import Categories from "./Categories";
import ProductsView from "./ProductsView";
import ItemList from "../ItemList";
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import { Divider } from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';
import ProductsNotFound from "./ProductsNotFound";
import FilterIndicator from "./FilterIndicator";


const FilterContainer = () => {
    const { searchValue, productsFound, setSearchValue } = useSearchContext();
    const [filterProducts, setFilterProducts] = useState([]);
    const [view, setView] = useState({ list: false, gallery: true });
    const [loading, setLoading] = useState(true);
    const [whCategory, setwhCategory] = useState('All')
    const [whRange, setwhRange] = useState([false, false])
    const [whSort, setWhSort] = useState('')


    useEffect(() => {
        const aux = JSON.parse(JSON.stringify(productsFound))//'cause of map
        aux.map(e => {
            return e.filterCategory = true, e.filterPriceRange = true
        });
        setFilterProducts(aux);
        if (productsFound.length) {
            setLoading(false)
        };
        if (searchValue.length) {
            setLoading(false)
        };
    }, [productsFound]);
    const setFilter = (value) => {
        setFilterProducts(value)
    };

    const productsFiltered = filterProducts.filter(e => {
        return e.filterCategory === true && e.filterPriceRange === true
    });
    const setViewState = (value) => {
        setView(value)
    };

    return (
        <>
            <Box pt={3}>
                <Grid container justify="center">
                    <Categories {...{ filterProducts, setFilter, setwhCategory }} />
                </Grid>
            </Box>

            <Box py={3}>
                <Grid container spacing={1} justify="space-evenly">
                    <Grid item lg={4} md={4} xs={12}>
                        <SortPrice {...{ filterProducts, setFilter, setWhSort }} />
                        <Hidden mdUp> <Box mt={2}><Divider variant="middle" light /></Box> </Hidden>
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <PriceRange {...{ filterProducts, setFilter, setwhRange }} />
                        <Hidden mdUp> <Box mt={2}><Divider variant="middle" light /></Box> </Hidden>
                    </Grid>
                    <Grid item lg={4} md={2} xs={12}>
                        <ProductsView {...{ view, setViewState }} />
                    </Grid>
                </Grid>
            </Box>
            <Divider variant="middle" light />


            <FilterIndicator {...{ setWhSort, setwhRange, view, searchValue, whCategory, whRange, whSort, setSearchValue, setView, setwhCategory }} />
            {view.gallery && <ItemGallery productsState={productsFiltered} />}
            {view.list && <ItemList productsState={productsFiltered} />}
            {loading ?
                <Spinner />
                : !productsFiltered.length && <ProductsNotFound />}
        </>
    )
}

export default FilterContainer;