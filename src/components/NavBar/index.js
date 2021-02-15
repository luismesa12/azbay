import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';


function NavBar() {
    return (
        <>
            <nav id="menu" className="nav navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink to='/' className="navbar-brand mb-0 h1">AZbay</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav ml-auto text-center">
                        <li className="nav-item" data-toggle="collapse" data-target="#navbarNav"><a className="nav-link"
                            href="#">Inicio</a>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target="#navbarNav"><a className="nav-link"
                            href="#">Productos</a></li>
                        <li className="nav-item" data-toggle="collapse" data-target="#navbarNav"><a className="nav-link" 
                        href="#">Mi Cuenta</a></li>
                        <li className="nav-item" data-toggle="collapse" data-target="#navbarNav"><a className="nav-link"
                            href="#">Carrito</a></li><CartWidget/>
                        <li className="nav-item" data-toggle="collapse" data-target="#navbarNav"><a className="nav-link"
                            href="#contacto">Contacto</a></li>
                    </ul>
                </div>
            </nav>

        </>
    );
}

export default NavBar;
