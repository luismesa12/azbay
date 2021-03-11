const ItemCardAdd = ({ onAdd }) => {
    
    return (
        <>
            <button onClick={()=>onAdd(1)}>Aañadir al Carrito</button>
        </>
    )
}

export default ItemCardAdd;
