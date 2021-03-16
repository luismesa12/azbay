import { useEffect, useState } from "react";
import { useSearchContext } from "../../../context/SearchContext";
import ItemGallery from "../ItemGallery";
import Spinner from "../../Spinner"
import SortPrice from "./SortPrice";
import PriceRange from "./PriceRange";
import Categories from "./Categories";
import ProductsView from "./ProductsView";
import ItemList from "../ItemList";

const FilterContainer = () => {
    const { searchValue, productsFound } = useSearchContext();
    const [filterProducts, setFilterProducts] = useState([]);
    const [view, setView] = useState({list:false,gallery:true});
    
    useEffect(() => {
            const aux = JSON.parse(JSON.stringify(productsFound))//'cause of map
            aux.map(e=>{
                return e.filterCategory = true, e.filterPriceRange=true
            });
            setFilterProducts(aux)
    }, [productsFound]);

    const setFilter=(value)=>{
        setFilterProducts(value)
    };
    
    const productsFiltered = filterProducts.filter(e=>{
        return e.filterCategory === true && e.filterPriceRange===true
    });
    const setViewState= (value)=>{
        setView(value)
    };

    return (
        <>  
            <div className="row">
                <div className="col">
                <Categories {...{ filterProducts, setFilter}} />
                </div>
                <div className="col">
                    <PriceRange {...{ filterProducts, setFilter}}/>
                </div>
                <div className="col">
                   <SortPrice {...{ filterProducts, setFilter}}/>
                </div>
                <div className="col">
                   <ProductsView {...{ view, setViewState}}/>
                </div>
            </div>
            {view.gallery&&<ItemGallery productsState={productsFiltered} />}
            {view.list&&<ItemList productsState={productsFiltered} />}
        </>
    )
}

export default FilterContainer;