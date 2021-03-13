import BtnSort from "./BtnSort"

const SortPrice = ({products, sortProducts}) => {
    const tempProducts = [...products];
    
    const ascending = () =>{
        tempProducts.sort((a,b)=>a.price-b.price);
        sortProducts(tempProducts);
    };

    const descending = () =>{
        tempProducts.sort((a,b)=>b.price-a.price);
        sortProducts(tempProducts);
    };    

    return (
        <>
            <BtnSort ascending={ascending} descending={descending}/>
        </>
    )
}

export default SortPrice;
