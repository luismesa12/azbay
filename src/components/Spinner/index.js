import Skeleton from '@material-ui/lab/Skeleton';
import Container from '@material-ui/core/Container'
import { Box } from "@material-ui/core";
const Spinner = () => {
    return (
        <>
            <Box>
                <Container maxWidth="md">
                    <Skeleton height={50}/>
                    <Skeleton animation={false} height={100}/>
                    <Skeleton animation="wave" height={50}/>
                    <Skeleton animation={false} />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                    <Skeleton animation="wave" />
                    <Skeleton height={50}/>
                    <Skeleton height={50}/>
                    <Skeleton />
                </Container>
                </Box>
        </>
    )
}
export default Spinner;