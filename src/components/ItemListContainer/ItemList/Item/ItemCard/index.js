const ItemCard = ({ product }) => {
    return (
        <div className="card">
            <div className="card-body">
                <img src={product.pictureUrl} />
                <h4 className="card-title">{product.title}</h4>
                <h5>${product.price}</h5>
            </div>
        </div>
    );
};
export default ItemCard;