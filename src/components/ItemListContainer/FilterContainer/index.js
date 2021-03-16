import { useEffect, useState } from "react";
import { useSearchContext } from "../../../context/SearchContext";
import Item from "../ItemList/Item";
import Spinner from "../../Spinner"
import SortPrice from "../../SortPrice";
import PriceRange from "../../PriceRange";
import Categories from "../../Categories";

const FilterContainer = () => {
    const { searchValue, productsFound } = useSearchContext();
    const [filterProducts, setFilterProducts] = useState([])
    
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
    })

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
            </div>
            
            <div className='card-columns'><Item productsState={productsFiltered} /></div>

        </>
    )
}

export default FilterContainer;