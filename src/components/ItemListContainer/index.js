import CategoryContainer from "./CategoryContainer";


const ItemListContainer = ({ greeting }) => {


    return (
        <>
            <h2 className="text-center text-info">{greeting}</h2>
    
            <h2>Categorias</h2>
            <CategoryContainer/>
        </>
    )
}

export default ItemListContainer;