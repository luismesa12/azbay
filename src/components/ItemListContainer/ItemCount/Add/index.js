const Add = ({count}) => {
    const onAdd = ()=>{
        alert(`Se agregaron ${count} Items`)    
    }
    return (
        <button onClick={onAdd}>Agregar</button>
    )
};

export default Add;