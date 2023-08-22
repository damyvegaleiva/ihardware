import { RxHamburgerMenu } from "react-icons/rx";

const HamburgerButton = ({ handleClick }) => {
  return (
    <div className="hamburger-btn" onClick={handleClick}>
      <RxHamburgerMenu />
    </div>
  );
};

export default HamburgerButton;
