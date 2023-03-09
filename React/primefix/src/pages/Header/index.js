import {Link} from "react-router-dom";
import './header.css'

function Header() {
    return (
        <header>
            <Link className="logo" to="/">PrimeFix</Link>
            <Link className="favoritos" to="/favoritos">Filmes</Link>
        </header>
    )
}

export default Header