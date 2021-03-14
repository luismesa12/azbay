import { useEffect, useState } from "react";
import { useSearchContext } from "../../../context/SearchContext";
import Item from "../ItemList/Item";
import Spinner from "../../ItemDetailContainer/Spinner"
import SortPrice from "../../SortPrice";
import PriceRange from "../../PriceRange";

const CategoryContainer = () => {
    const {searchValue, productsFound} = useSearchContext();
    const [productsFiltered, setProductsFiltered] = useState([])
    const [NotFound, setNotFound] = useState(false)
    
    let categoryAAA = [];
    let categoryBBB = [];
    let categoryCCC = [];
    useEffect(() => {
        setProductsFiltered(productsFound)
    }, [productsFound]);
    useEffect(() => {
        if (searchValue) {
            setNotFound(true)
        }
    }, [searchValue]);
    if (productsFound.length > 0) {
        categoryAAA = productsFound.filter(i => i.category === 'AAA');
        categoryBBB = productsFound.filter(i => i.category === 'BBB');
        categoryCCC = productsFound.filter(i => i.category === 'CCC');
    }
    const cAAA = () => setProductsFiltered(categoryAAA);
    const cBBB = () => setProductsFiltered(categoryBBB);
    const cCCC = () => setProductsFiltered(categoryCCC);
    const cAll = () => setProductsFiltered(productsFound);
    return (
        <>
            <button onClick={cAll}>Todos</button>
            <button onClick={cAAA}>AAA</button>
            <button onClick={cBBB}>BBB</button>
            <button onClick={cCCC}>CCC</button>
            <div>
                Ordenar: <SortPrice products={productsFiltered} sortProducts={(e)=>{setProductsFiltered(e)}}/>
            </div>
            <div>
                <PriceRange NotFound={e=>setNotFound(e)} productsDefault={productsFound} products={productsFiltered} setProducts={(e)=>{setProductsFiltered(e)}}/>
            </div>               
            {
                productsFiltered.length?
                    <div className='card-columns'><Item productsState={productsFiltered}/></div>
                    :NotFound?
                        <h2>No hay productos que coincidan con tu búsqueda</h2>
                        :<div><Spinner/></div>
            }  
        </>
    )
}

export default CategoryContainer;