import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
const BtnCategories = ({ cAll, cAAA, cBBB, cCCC }) => {
    return (
        <div>
            <ButtonGroup size="large" variant="text" color="primary" aria-label="categories">
                <Button onClick={cAll}>Todos</Button>
                <Button onClick={cAAA}>AAA</Button>
                <Button onClick={cBBB}>BBB</Button>
                <Button onClick={cCCC}>CCC</Button>
            </ButtonGroup>
        </div>
    )
}

export default BtnCategories;
