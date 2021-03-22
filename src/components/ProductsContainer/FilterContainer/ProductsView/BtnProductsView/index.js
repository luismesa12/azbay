import Button from '@material-ui/core/Button'
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import IconButton from '@material-ui/core/IconButton'
import ButtonGroup from '@material-ui/core/ButtonGroup';

const BtnProductsView = ({ viewList, viewGallery }) => {
    return (
        <div>
            <ButtonGroup variant="text" color="primary" aria-label="viewProduct">
                <IconButton color="primary" aria-label="viewList" onClick={viewList}>
                    <ViewHeadlineIcon />
                </IconButton>
                <IconButton color="primary" aria-label="viewModule" onClick={viewGallery}>
                    <ViewModuleIcon />
                </IconButton>
            </ButtonGroup>
        </div>
    )
}

export default BtnProductsView;
