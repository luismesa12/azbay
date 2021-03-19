import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Remove from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

function Counter({ count, setCount, max }) {

    const decCount = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    };
    const incCount = () => {
        if (count < max) {
            setCount(count + 1)
        }
    };

    return (
        <div>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button size="small" onClick={decCount}><Remove/></Button>
                <Button variant="contained" disableElevation>{count}</Button>
                <Button size="small" onClick={incCount}><AddIcon/></Button>
            </ButtonGroup>
        </div>
    )
}

export default Counter
