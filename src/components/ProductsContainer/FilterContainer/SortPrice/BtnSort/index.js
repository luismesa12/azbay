import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const BtnSort = ({ascending, descending}) => {
    return (
        <>
            <ButtonGroup variant="text" color="primary" aria-label="sortPrice">
              <Button onClick={ascending} endIcon={<TrendingUpIcon/>}>Precio</Button>
              <Button onClick={descending} endIcon={<TrendingDownIcon/>}>Precio</Button>
            </ButtonGroup>
        </>
    )
}

export default BtnSort;
