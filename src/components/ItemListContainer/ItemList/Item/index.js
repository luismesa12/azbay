import ItemCard from "./ItemCard";

const Item = ({ productsState }) => {
    return (
        <>
            {
                productsState.map((product) => <ItemCard key={product.id} product={product} />)
            }
        </>
    )
};
export default Item;