const ContactForm = ({ name, email, phone, msg, handleName, handleEmail, handlePhone, handleMsg, sendMsg }) => {

    return (
        <div className="container">
            <p><b><i>ContactForm</i></b></p>
            <form onSubmit={sendMsg}>
                <div className="mb-1">
                    <label>Nombre:</label>
                    <div>
                        <input type="text" placeholder="Nombre" onChange={handleName} value={name} />
                    </div>
                </div>
                <div className="mb-1">
                    <label>Email:</label>
                    <div>
                        <input type="email" placeholder="Email" onChange={handleEmail} value={email} />
                    </div>

                </div>
                <div className="mb-1">
                    <label >Télefono:</label>
                    <div>
                        <input type="text" placeholder="Télefono" onChange={handlePhone} value={phone} />
                    </div>
                </div>
                <div className="mb-4">
                    <label>Mensaje:</label>
                    <div>
                        <textarea rows="3" placeholder="Cuéntanos..." onChange={handleMsg} value={msg} />
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-dark my-2">Enviar Mensaje</button>
                <button type="button" className="btn btn-secondary my-2"> Limpiar Formulario</button>
            </form>
        </div>
    )
}

export default ContactForm
