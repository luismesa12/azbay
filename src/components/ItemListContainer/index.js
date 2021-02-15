import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {


    return (
        <>
            <h2 className="text-center text-info">{greeting}</h2>
            <div className="card-columns">
                <ItemList />
            </div>
        </>
    )
}

export default ItemListContainer;