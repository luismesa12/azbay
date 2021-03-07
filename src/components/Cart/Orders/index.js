import { useCartContext } from "../../../context/CartContext";
import firebase from 'firebase/app';
import db from "../../../firebase";



const Orders = () => {
    const { cart } = useCartContext();
    const tempCart = [...cart];
    const accum = tempCart.reduce(totalQ, 0)

    function totalQ(acc, i) {
        return acc += i.price * i.quantity
    };
    /* */
    async function createOrder() {
        const buyer = {
            name: document.getElementById("fname").value,
            lastName: document.getElementById("sname").value,
            number: document.getElementById("pnumber").value,
            email: document.getElementById("email").value
        };
        const newOrder = {
            ...buyer,
            items: cart,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: accum
        };

        const orders = db.collection("orders");

        try {
            await orders.add(newOrder).then(id => {
                console.log('Order created with id: ', id.id);
            });
        }
        catch (err) {
            console.error(err);
        }
    }
    /*  */

    return (
        <>
            <h1>Crear Orden</h1>
            {
                <>

                    <div className='container'>

                        <div className='card'>
                            <div className='card-body'>
                                {cart.map((item) => <p key={item.id}>{`*${item.title} Precio: $${item.price} Cantidad: ${item.quantity} Total: $${item.price * item.quantity}`}</p>)}
                                <h3>
                                    Total a pagar: ${accum}
                                </h3>
                                <div>
                                    <h6>Ingrese Sus Datos:</h6>
                                    <div>
                                        <input id='fname' placeholder='Nombre'></input>
                                    </div>
                                    <div>
                                        <input id='sname' placeholder='Apellido'></input>
                                    </div>
                                    <div>
                                        <input id='pnumber' placeholder='Celular'></input>
                                    </div>
                                    <div>
                                        <input id='email' placeholder='Email'></input>
                                    </div>
                                </div>
                                <button onClick={createOrder}>Finalizar Orden</button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
export default Orders;