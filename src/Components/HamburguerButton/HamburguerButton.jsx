import { RxHamburgerMenu } from "react-icons/rx";

const HamburguerButton = ({ handleClick }) => {
  return (
    <div className="hamburguer-btn" onClick={handleClick}>
      <RxHamburgerMenu />
    </div>
  );
};

export default HamburguerButton;
