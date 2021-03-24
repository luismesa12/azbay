import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
const BtnCategories = ({ cAll, cAAA, cBBB, cCCC }) => {
    return (
        <div>
            <ButtonGroup size="large" variant="text" color="primary" aria-label="categories">
                <Button onClick={cAll}>Todos</Button>
                <Button onClick={cAAA}>Sillas</Button>
                <Button onClick={cBBB}>Sofás</Button>
                <Button onClick={cCCC}>Camas</Button>
            </ButtonGroup>
        </div>
    )
}

export default BtnCategories;
