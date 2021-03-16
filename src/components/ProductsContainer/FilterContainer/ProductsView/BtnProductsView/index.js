const BtnProductsView = ({viewList, viewGallery}) => {
    return (
        <div>
            <span>Ver: </span>
            <button onClick={viewList}>lista</button>
            <button onClick={viewGallery}>Cuadros</button>
        </div>
    )
}

export default BtnProductsView;
