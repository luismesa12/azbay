const BtnCategories = ({cAll,cAAA,cBBB,cCCC}) => {
    return (
        <div>
            <p><b><i>BTNCatecories</i></b></p>
            <button onClick={cAll}>Todos</button>
            <button onClick={cAAA}>AAA</button>
            <button onClick={cBBB}>BBB</button>
            <button onClick={cCCC}>CCC</button>
        </div>
    )
}

export default BtnCategories;
