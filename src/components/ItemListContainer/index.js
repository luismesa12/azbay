import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {


    return (
        <>
            <h2 className="text-center text-info">{greeting}</h2>
            <ItemCount stock={5} initial={1} />
            <div className="card-columns">
                <ItemList />
            </div>
        </>
    )
}

export default ItemListContainer;