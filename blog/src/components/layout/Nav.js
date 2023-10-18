import { NavLink } from 'react-router-dom';

const Nav = () => {

    return(
        <nav>
            <ul>
                <li> <NavLink to="/inicio"> Inicio </NavLink> </li>
                <li> <NavLink to="/articulos"> Artículos </NavLink> </li>
                <li> <NavLink to="/nuevo-articulo"> Nuevo Artículo </NavLink> </li>
            </ul>
        </nav>
    )
}

export default Nav;