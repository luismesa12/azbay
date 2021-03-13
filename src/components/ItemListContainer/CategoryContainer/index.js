import { useEffect, useState } from "react";
import { useProductContext } from "../../../context/ProductContext";
import { useSearchContext } from "../../../context/SearchContext";
import Item from "../ItemList/Item";


const CategoryContainer = () => {
    const {searchValue, setSearchValue} = useSearchContext();
    console.log(searchValue);
    const [productsFiltered, setProductsFiltered] = useState([])
    const { products } = useProductContext();
    let categoryAAA = [];
    let categoryBBB = [];
    let categoryCCC = [];
    useEffect(() => {
        if (products.length > 0) {
            categoryAAA = products.filter(i => i.category === 'AAA');
            categoryBBB = products.filter(i => i.category === 'BBB');
            categoryCCC = products.filter(i => i.category === 'CCC');
        }
    }, [products, productsFiltered]);
    const cAAA = () => setProductsFiltered(categoryAAA);
    const cBBB = () => setProductsFiltered(categoryBBB);
    const cCCC = () => setProductsFiltered(categoryCCC);
    const cAll = () => setProductsFiltered(products);
    return (
        <>
            <button onClick={cAll}>Todos</button>
            <button onClick={cAAA}>AAA</button>
            <button onClick={cBBB}>BBB</button>
            <button onClick={cCCC}>CCC</button>
            <div className='card-columns'>
            {productsFiltered.length?
                <Item productsState={productsFiltered} />
                :<Item productsState={products} />}
            </div>
        </>
    )
}

export default CategoryContainer;