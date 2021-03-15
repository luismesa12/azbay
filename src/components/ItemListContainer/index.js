import FilterContainer from "./FilterContainer";


const ItemListContainer = ({ greeting }) => {


    return (
        <>
            <h2 className="text-center text-info">{greeting}</h2>
    
            <h1>ItemListContainer</h1>
            <FilterContainer/>
        </>
    )
}

export default ItemListContainer;