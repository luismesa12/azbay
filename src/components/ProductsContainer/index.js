import { Container } from "@material-ui/core";
import FilterContainer from "./FilterContainer";


const ProductsContainer = () => {

    return (
        <>
        <img width='100%' src="https://i.imgur.com/0MQCOJz.jpg" />
        <Container maxWidth="lg">
            <FilterContainer/>
        </Container>
            
        
        </>
    )
}
export default ProductsContainer;