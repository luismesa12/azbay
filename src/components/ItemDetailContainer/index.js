import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";
import DetailCard from "./DetailCard";
import Skeleton from '@material-ui/lab/Skeleton';
import Container from '@material-ui/core/Container'
import { Box } from "@material-ui/core";


const ItemDetailContainer = () => {
    const { products } = useProductContext();
    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (products.length > 0) {
            const getItems = products.find(i => i.id === id)
            setItemDetail(getItems);
            setLoading(false);
        }
    }, [products]);

    return (
        <>
            {loading ?
                <Box mt={6}>
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
                : <><DetailCard product={itemDetail} /></>}
        </>);
};
export default ItemDetailContainer;