import { Link } from "react-router-dom";
import { useState } from "react";
import NavBarList from "../NavBarList/NavBarList";
import HamburgerButton from "../HamburgerButton/HamburgerButton";

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
    <nav>
      <Link to={"/"}>
        <img src="./images/logo.webp" width={40} alt="Logo company" />{" "}
      </Link>

      <NavBarList handleClick={handleClick} isActive={isActive} />

      <HamburgerButton handleClick={handleClick} />
    </nav>
  );
};

export default NavBarContainer;
