import Button from '@material-ui/core/Button'
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import IconButton from '@material-ui/core/IconButton'

const BtnProductsView = ({ viewList, viewGallery }) => {
    return (
        <div>
            <span>Ver: </span>
            <IconButton color="primary" aria-label="viewList" onClick={viewList}>
                <ViewHeadlineIcon />
            </IconButton>
            <IconButton color="primary" aria-label="viewModule" onClick={viewGallery}>
                <ViewModuleIcon />
            </IconButton>
        </div>
    )
}

export default BtnProductsView;
