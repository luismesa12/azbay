import { useEffect, useState } from "react";
import { useProductContext } from "../../../context/ProductContext";
import Item from "../ItemList/Item";


const CategoryContainer = () => {
    const [productsFiltered, setProductsFiltered] = useState([])
    const { products } = useProductContext();
    console.log('catgorycontainer', products);
    let categoryAAA = [];
    let categoryBBB = [];
    let categoryCCC = [];
    useEffect(() => {
        if (products.length > 0) {
            categoryAAA = products.filter(i => i.price == 100);
            categoryBBB = products.filter(i => i.price == 200);
            categoryCCC = products.filter(i => i.price == 300);
            console.log('cateAAA:', categoryAAA);
            console.log('catebbb:', categoryBBB);
            console.log('cateccc:', categoryCCC);
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