import BtnSort from "./BtnSort"

const SortPrice = ({ filterProducts, setFilter}) => {
    const tempProducts = [...filterProducts];
    
    const ascending = () =>{
        tempProducts.sort((a,b)=>a.price-b.price);
        setFilter(tempProducts);
    };

    const descending = () =>{
        tempProducts.sort((a,b)=>b.price-a.price);
        setFilter(tempProducts);
    };    

    return (
        <>  
            <p><b><i>SortPrice</i></b></p>
            <BtnSort ascending={ascending} descending={descending}/>
        </>
    )
}

export default SortPrice;
