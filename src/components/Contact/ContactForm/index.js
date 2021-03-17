const ContactForm = () => {
    return (
        <div className="container">
            <p><b><i>ContactForm</i></b></p>
            <form>
                <div className="mb-1">
                    <label>Nombre:</label>
                    <div>
                        <input type="text" placeholder="Nombre" />
                    </div>
                </div>
                <div className="mb-1">
                    <label>Email:</label>
                    <div>
                        <input type="email" placeholder="Email" />
                    </div>

                </div>
                <div className="mb-1">
                    <label >Télefono:</label>
                    <div>
                        <input type="text" placeholder="Télefono" />
                    </div>
                </div>
                <div className="mb-4">
                    <label>Mensaje:</label>
                    <div>
                        <textarea rows="3" placeholder="Télefono"></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-dark my-2">Enviar Mensaje</button>
                <button type="button" className="btn btn-secondary my-2"> Limpiar Formulario</button>
            </form>
        </div>
    )
}

export default ContactForm
