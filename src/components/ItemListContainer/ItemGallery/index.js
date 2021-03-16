import ItemCard from "./ItemCard";

const ItemGallery = ({ productsState }) => {
    return (
        <>
            {
                productsState.map((product) => <span key={product.id}><ItemCard product={product} /></span>)
            }
        </>
    )
};
export default ItemGallery;