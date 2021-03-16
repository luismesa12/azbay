const BtnSort = ({ascending, descending}) => {
    return (
        <>
            <button onClick={descending}>+Mayor Precio</button>
            <button onClick={ascending}>-Menor Precio</button>
        </>
    )
}

export default BtnSort;
