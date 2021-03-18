function AlertOrder({ currentOrder, orderOk, orderError }) {

    return (
        <>
            {orderOk &&
                <div className="alert alert-success" role="alert">
                    <b>Orden Creada Corectamente </b>
                    <p>Orden Id: <b>{currentOrder.id}</b></p>
                    <p>Cliente: {currentOrder.name} {currentOrder.lastName}</p>
                    <p>Total: <b>${currentOrder.total}</b></p>
                </div>
            }
            {orderError &&
                <div className="alert alert-danger" role="alert">
                    La orden no fue creada
                </div>
            }
        </>
    )
}

export default AlertOrder
