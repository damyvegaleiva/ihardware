import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWIdget";

const NavBar = () => {
    return (
        <nav className="navbar-container">
            <Link to={'/'}> <img src='./images/logo.webp' width={40} alt="Logo company" /> </Link>
            <ul className="navbar-container__list">
                <li><Link to={'/category/iphones'}>iPhones</Link></li>
                <li><Link to={'/category/macbooks'}>MacBooks</Link></li>
                <li><Link to={'/category/ipads'}>iPads</Link></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar;