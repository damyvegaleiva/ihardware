import { Link } from "react-router-dom";
import { useState } from "react";
import HamburguerButton from "../HamburguerButton/HamburguerButton";
import NavBarList from "../NavBarList/NavBarList";

const NavBarContainer = () => {
  const [isActive, setIsActive] = useState("");

  const handleClick = () => {
    if (isActive === "active") {
      setIsActive("");
      return;
    }
    setIsActive("active");
  };

  return (
    <nav className={`navbar-container ${isActive}`}>
      <Link to={"/"}>
        <img src="./images/logo.webp" width={40} alt="Logo company" />{" "}
      </Link>

      <NavBarList handleClick={handleClick} isActive={isActive} />

      <HamburguerButton handleClick={handleClick} />
    </nav>
  );
};

export default NavBarContainer;
