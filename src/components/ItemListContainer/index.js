import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {


    return (
        <>
            <h2 className="text-center text-info">{greeting}</h2>
            <ItemCount stock={5} initial={1} />
        </>
    )
}

export default ItemListContainer;