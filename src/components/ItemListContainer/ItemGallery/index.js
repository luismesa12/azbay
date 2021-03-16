import ItemCard from "./ItemCard";

const ItemGallery = ({ productsState }) => {
    return (
        <>
            <div className='card-columns'>
                {
                    productsState.map((product) => <span key={product.id}><ItemCard product={product} /></span>)
                }
            </div>
        </>
    )
};
export default ItemGallery;