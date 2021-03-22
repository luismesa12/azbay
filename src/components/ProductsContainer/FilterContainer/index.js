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

const FilterContainer = () => {
    const { searchValue, productsFound } = useSearchContext();
    const [filterProducts, setFilterProducts] = useState([]);
    const [view, setView] = useState({ list: false, gallery: true });
    const [loading, setLoading] = useState(true);

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
    console.log(productsFound);
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

            <Box>
                <Categories {...{ filterProducts, setFilter }} />
            </Box>
            
            <Grid container spacing={1}>
                <Grid item lg={4}>
                    <SortPrice {...{ filterProducts, setFilter }} />
                </Grid>
                <Grid item lg={4}>
                    <PriceRange {...{ filterProducts, setFilter }} />
                </Grid>
                <Grid item lg={4}>
                    <ProductsView {...{ view, setViewState }} />
                </Grid>
            </Grid>

            {view.gallery && <ItemGallery productsState={productsFiltered} />}
            {view.list && <ItemList productsState={productsFiltered} />}
            {loading ?
                <Spinner />
                : !productsFiltered.length && <h1>Aquí Va Componente de Productos No Encontrados</h1>}
        </>
    )
}

export default FilterContainer;