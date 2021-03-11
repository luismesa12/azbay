import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';
import FavoriteWidget from '../FavoriteWidget';


function NavBar() {
    return (
        <>
            <nav id="menu" className="nav navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink to='/' className="navbar-brand mb-0 h1">AZbay</NavLink>
                <NavLink to='/myFavorites'>
                <FavoriteWidget />
                </NavLink>
                <NavLink to='/carrito' data-toggle="collapse" data-target="#navbarNav">
                    <CartWidget />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav ml-auto text-center">
                        <li className="nav-item" data-toggle="collapse" data-target="#navbarNav">
                            <NavLink to='/' className="nav-link">Inicio</NavLink>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target="#navbarNav">
                            <NavLink to='/items' className="nav-link">Productos</NavLink>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target="#navbarNav"><a className="nav-link"
                            href="#">Mi Cuenta</a></li>

                        <li className="nav-item" data-toggle="collapse" data-target="#navbarNav"><a className="nav-link"
                            href="#">Contacto</a></li>
                    </ul>
                </div>
            </nav>

        </>
    );
}

export default NavBar;
