import BtnProductsView from "./BtnProductsView"

const ProductsView = ({ view, setViewState}) => {
    
    const viewList =()=>{
        const tempView = {...view};
        tempView.gallery = false;
        tempView.list = true;
        setViewState(tempView);
    };

    const viewGallery =()=>{
        const tempView = {...view};
        tempView.list = false;
        tempView.gallery = true;
        setViewState(tempView);
    };

    return (
        <div>
            <p><b><i>ProductsView</i></b></p>
            <BtnProductsView {...{viewList, viewGallery}}/>
        </div>
    )
}

export default ProductsView;
