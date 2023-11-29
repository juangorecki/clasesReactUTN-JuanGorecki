import { Link } from "react-router-dom";


const Nav = (props) =>{
    return(
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ejemplo1">Ejemplo1</Link></li>
            <li><Link to="/ejemplo2">Ejemplo2</Link></li>
            <li><Link to="/ejemplo3">Ejemplo3</Link></li>
            <li><Link to="/json">Json</Link></li>
            <li><Link to="/api">API</Link></li>
        </ul>
        </nav>
    )
}


export default Nav;