import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton'


const ItemCardAdd = ({ onAdd }) => {
    
    return (
        <>
            <IconButton aria-label="" onClick={()=>onAdd(1)}>
              <AddShoppingCartIcon/>
            </IconButton>
        </>
    )
}

export default ItemCardAdd;
