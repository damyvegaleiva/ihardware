import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWIdget";

const NavBarList = ({ handleClick, isActive }) => {
  return (
    <ul className={`navbar-container__list ${isActive}`}>
      <li onClick={handleClick}>
        <Link to={"/category/iphones"}>iPhones</Link>
      </li>
      <li onClick={handleClick}>
        <Link to={"/category/macbooks"}>MacBooks</Link>
      </li>
      <li onClick={handleClick}>
        <Link to={"/category/ipads"}>iPads</Link>
      </li>

      <CartWidget handleClick={handleClick} />
    </ul>
  );
};

export default NavBarList;
