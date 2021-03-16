import ItemListCard from "./ItemListCard";

const ItemList = ({ productsState }) => {


    return (
        <>
        <div className="container">
        {
                productsState.map((product) => <span key={product.id}><ItemListCard product={product} /></span>)
        }
        </div>
        </>
    )
};
export default ItemList;